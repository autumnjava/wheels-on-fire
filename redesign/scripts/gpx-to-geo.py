#!/usr/bin/env python3
"""
Trailforks GPX  ->  site/assets/tours-geo.js

Reads the client's GPX exports (one folder per riding area) and writes the
generated geometry block the tours page consumes. Standard library only.

    python3 redesign/scripts/gpx-to-geo.py ~/Downloads/WheelsOnFire

To add a tour: drop the GPX in, add an entry to TOURS below in riding order,
and add a matching entry (copy, level, price) to site/assets/tours-data.js
under the same key.
"""
import json, math, os, sys, re
import xml.etree.ElementTree as ET
from bisect import bisect_left

NS = {'g': 'http://www.topografix.com/GPX/1/1'}

# Trailforks names that read badly on the site. The trail catalogued as
# "Ponta Delgada 2" is in Mosteiros, nowhere near Ponta Delgada.
NAME_FIX = {'Ponta Delgada 2': 'Ponta Delgada'}

# --- lat/lon -> the island SVG in tours.html -------------------------------
# X is pinned to Sao Miguel's real extreme points (Ponta do Escalvado in the
# west, Ponta do Arnel in the east) against the coast path's own extremes.
# Y then follows from the projection: one degree of latitude has to measure
# sx/cos(lat) so the outline is not stretched. Fitting Y freely instead lets
# the optimiser inflate the scale until every point sits comfortably inland,
# which puts Ponta Delgada in the middle of the island.
SVG_W_X, SVG_E_X = 0.544556, 2150.54
LON_W,   LON_E   = -25.854, -25.1285
SX = (SVG_E_X - SVG_W_X) / (LON_E - LON_W)
TX = SVG_W_X - SX * LON_W
SY = -SX / math.cos(math.radians(37.8))
TY = 142183.0          # offset chosen so all 12 tracks sit inland; see notes

LAT0    = math.radians(37.80)
STAGGER = 0.8          # each trail steps down the screen in riding order
GAP     = 0.06         # compressed shuttle transfer, as a share of total width
RDP_EPS = 0.0016       # simplification tolerance, share of drawing width
ALTI_N  = 56           # altimetry samples

# Grouping and riding order come from the client, not from the GPS.
TOURS = {
    'sc1':       (['Sete Cidades/tunel.gpx', 'Sete Cidades/paralelo-tunel.gpx',
                   'Sete Cidades/portal-do-vento.gpx'],
                  'Túnel', 'Portal do Vento'),
    'sc2':       (['Sete Cidades/SeteCidades.gpx'],
                  'Sete Cidades rim', 'Caldera floor'),
    'povoacao':  (['Povoacao/bispos.gpx', 'Povoacao/pico-longo.gpx',
                   'Povoacao/rasta-trail.gpx'],
                  'Bispos', 'Rasta Trail'),
    'faial':     (['Faial da terra/pico-dos-bodes.gpx', 'Faial da terra/atalhada.gpx',
                   'Faial da terra/pico-grande.gpx', 'Faial da terra/pedra-torta.gpx'],
                  'Pico dos Bodes', 'Pedra Torta'),
    'mosteiros': (['Mosteiros/ponta-delgada-2.gpx'],
                  'Ponta Delgada', 'Mosteiros'),
}


def load(path):
    root = ET.parse(path).getroot()
    pts = []
    for t in root.iterfind('.//g:trkpt', NS):
        ele = t.find('g:ele', NS)
        pts.append((float(t.get('lat')), float(t.get('lon')),
                    float(ele.text) if ele is not None else 0.0))
    if not pts:
        raise SystemExit(f'no track points in {path}')
    n = root.find('.//g:trk/g:name', NS)
    name = n.text.strip() if n is not None and n.text else os.path.basename(path)
    # a ride log is named "Jul 15, 2026 <user> Ride" - fall back to the riding area
    if re.match(r'^[A-Z][a-z]{2} \d+, \d{4}.*Ride$', name):
        name = f'{os.path.basename(os.path.dirname(path))} ride log'
    return NAME_FIX.get(name, name), pts


def haversine(a, b):
    R = 6371000.0
    p1, p2 = math.radians(a[0]), math.radians(b[0])
    h = (math.sin((p2 - p1) / 2) ** 2 +
         math.cos(p1) * math.cos(p2) * math.sin(math.radians(b[1] - a[1]) / 2) ** 2)
    return 2 * R * math.asin(math.sqrt(h))


def smooth(v, w=5):
    """Raw barometric elevation is noisy; unsmoothed it roughly doubles ascent."""
    return [sum(v[max(0, i - w):i + w + 1]) / len(v[max(0, i - w):i + w + 1])
            for i in range(len(v))]


def metric(lat, lon):
    """Local equal-distance plane in metres, so shapes are not distorted."""
    return (lon * 111320 * math.cos(LAT0), -lat * 110540)


def rdp(pts, eps):
    if len(pts) < 3:
        return pts
    (x0, y0), (x1, y1) = pts[0], pts[-1]
    dx, dy = x1 - x0, y1 - y0
    L = math.hypot(dx, dy) or 1e-9
    dmax, imax = 0.0, 0
    for i in range(1, len(pts) - 1):
        d = abs(dy * (pts[i][0] - x0) - dx * (pts[i][1] - y0)) / L
        if d > dmax:
            dmax, imax = d, i
    if dmax <= eps:
        return [pts[0], pts[-1]]
    return rdp(pts[:imax + 1], eps)[:-1] + rdp(pts[imax:], eps)


def build(base, files, label_a, label_b):
    trails = []
    for f in files:
        name, pts = load(os.path.join(base, f))
        cum = [0.0]
        for i in range(1, len(pts)):
            cum.append(cum[-1] + haversine(pts[i - 1], pts[i]))
        ele = smooth([p[2] for p in pts])
        trails.append(dict(
            name=name, pts=pts, cum=cum, ele=ele,
            up=sum(max(0.0, ele[i + 1] - ele[i]) for i in range(len(ele) - 1)),
            dn=sum(max(0.0, ele[i] - ele[i + 1]) for i in range(len(ele) - 1))))

    subs = [[metric(p[0], p[1]) for p in t['pts']] for t in trails]

    # rotate so the whole thing reads left to right
    s, e = subs[0][0], subs[-1][-1]
    a = -math.atan2(e[1] - s[1], e[0] - s[0])
    ca, sa = math.cos(a), math.sin(a)
    subs = [[(q[0] * ca - q[1] * sa, q[0] * sa + q[1] * ca) for q in sub] for sub in subs]

    # Chain the trails: each keeps its true shape and its true size relative to
    # the others, but the transfers between them collapse to a short connector.
    # Drawn to scale the transfers would be most of the line - on the Faial day
    # that is 4.1 km of van against 7.0 km of trail.
    if len(subs) > 1:
        W = sum(max(q[0] for q in sub) - min(q[0] for q in sub) for sub in subs)
        H = max(max(q[1] for q in sub) - min(q[1] for q in sub) for sub in subs)
        chained, cur = [], 0.0
        for i, sub in enumerate(subs):
            dx = cur - min(q[0] for q in sub)
            t = [(q[0] + dx, q[1] + STAGGER * H * i) for q in sub]
            chained.append(t)
            cur = max(q[0] for q in t) + W * GAP
        subs = chained

    span = max(max(q[0] for sub in subs for q in sub) -
               min(q[0] for sub in subs for q in sub), 1.0)
    subs = [rdp(sub, span * RDP_EPS) for sub in subs]
    links = [[subs[i][-1], subs[i + 1][0]] for i in range(len(subs) - 1)]

    flat = [q for sub in subs for q in sub] + [q for l in links for q in l]
    xs = [q[0] for q in flat]
    ys = [q[1] for q in flat]
    w = max(xs) - min(xs)
    h = max(ys) - min(ys)
    nrm = lambda q: [round((q[0] - min(xs)) / w, 4), round((q[1] - min(ys)) / w, 4)]

    # altimetry sampled by TRAIL distance only, so hovering maps to real ground
    total = sum(t['cum'][-1] for t in trails)
    alti = []
    for i in range(ALTI_N + 1):
        want, acc = total * i / ALTI_N, 0.0
        for t in trails:
            if want <= acc + t['cum'][-1] or t is trails[-1]:
                loc = min(max(want - acc, 0.0), t['cum'][-1])
                j = max(0, min(bisect_left(t['cum'], loc) - 1, len(t['cum']) - 2))
                span_j = (t['cum'][j + 1] - t['cum'][j]) or 1.0
                f = (loc - t['cum'][j]) / span_j
                alti.append(round(t['ele'][j] + (t['ele'][j + 1] - t['ele'][j]) * f))
                break
            acc += t['cum'][-1]

    n = sum(len(t['pts']) for t in trails)
    clat = sum(p[0] for t in trails for p in t['pts']) / n
    clon = sum(p[1] for t in trails for p in t['pts']) / n

    return dict(
        stats=dict(dist=f'{total / 1000:.1f}',
                   up=str(int(round(sum(t['up'] for t in trails)))),
                   down=str(int(round(sum(t['dn'] for t in trails))))),
        transferKm=round(sum(haversine(trails[i]['pts'][-1], trails[i + 1]['pts'][0])
                             for i in range(len(trails) - 1)) / 1000, 2),
        aspect=round(h / w, 4),
        pin=dict(x=round(SX * clon + TX), y=round(SY * clat + TY)),
        routeA=label_a, routeB=label_b,
        trails=[dict(name=t['name'], km=round(t['cum'][-1] / 1000, 2),
                     down=int(round(t['dn'])), up=int(round(t['up']))) for t in trails],
        alti=alti,
        route=[[nrm(q) for q in sub] for sub in subs],
        links=[[nrm(x), nrm(y)] for x, y in links])


HEADER = '''/* ============================================================
   WHEELS ON FIRE - tour geometry  .  GENERATED, DO NOT HAND-EDIT
   Source: the client's Trailforks GPX exports.
   Regenerate: python3 redesign/scripts/gpx-to-geo.py <gpx-folder>

   What is real here:
     stats     distance / ascent / descent from the GPS track
               (elevation smoothed over an 11-point window first,
               raw barometric noise inflates ascent otherwise)
     alti      elevation sampled at equal TRAIL distance, so the
               hover position maps to real ground
     pin       true lat/lon projected onto the island outline
     trails    the actual Trailforks trail names, in riding order

   What is schematic:
     route     each trail keeps its true shape and its true size
               RELATIVE to the others, but the shuttle transfers
               between them are compressed to short connectors and
               each trail is stepped down the screen in riding
               order. Drawn to scale the transfers would be most
               of the line - you ride the trails, not the road.
     links     those compressed connectors (rendered dashed)
   ============================================================ */
'''


def main():
    base = sys.argv[1] if len(sys.argv) > 1 else os.path.expanduser('~/Downloads/WheelsOnFire')
    if not os.path.isdir(base):
        raise SystemExit(f'not a folder: {base}')
    out = {k: build(base, files, a, b) for k, (files, a, b) in TOURS.items()}

    j = lambda o: json.dumps(o, separators=(',', ':'), ensure_ascii=False)
    lines = [HEADER + 'window.WOF_GEO = {']
    for k, v in out.items():
        lines += [f'  {k}: {{',
                  f"    stats:{j(v['stats'])}, transferKm:{v['transferKm']}, aspect:{v['aspect']},",
                  f"    pin:{j(v['pin'])}, routeA:{j(v['routeA'])}, routeB:{j(v['routeB'])},",
                  f"    trails:{j(v['trails'])},",
                  f"    alti:{j(v['alti'])},",
                  f"    route:{j(v['route'])},",
                  f"    links:{j(v['links'])}",
                  '  },']
    lines[-1] = lines[-1].rstrip(',')
    lines.append('};')

    dest = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                        '..', 'site', 'assets', 'tours-geo.js')
    with open(os.path.normpath(dest), 'w', encoding='utf-8') as fh:
        fh.write('\n'.join(lines) + '\n')

    for k, v in out.items():
        print(f"{k:10} {v['stats']['dist']:>5} km  up {v['stats']['up']:>4}  "
              f"down {v['stats']['down']:>4}  pin({v['pin']['x']},{v['pin']['y']})  "
              f"{len(v['route'])} trail(s)  transfer {v['transferKm']} km")
    print(f"\nwrote {os.path.normpath(dest)}")


if __name__ == '__main__':
    main()
