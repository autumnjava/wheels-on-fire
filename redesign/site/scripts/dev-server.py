#!/usr/bin/env python3
"""Static server for the redesign proposal, with caching switched off.

Same job as `python3 -m http.server`, with one difference: every response
says no-store. During review the browser kept serving stale CSS and JS, so
pages that were already fixed still looked broken — and a measurement taken
against the new file disagreed with what was on screen. This removes that
whole class of confusion.

    python3 scripts/dev-server.py [port] [directory]
"""
import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class NoCache(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        """Serve /tours/enduro from tours/enduro.html, the way Vercel's
        cleanUrls does. Without this, refreshing a URL the quick view had
        pushed into the bar 404'd locally but worked once deployed."""
        full = super().translate_path(path)
        import os
        if not os.path.exists(full) and not path.endswith('/'):
            html = full + '.html'
            if os.path.isfile(html):
                return html
        return full

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def log_message(self, fmt, *args):          # quieter console
        if '200' not in (args[1] if len(args) > 1 else ''):
            super().log_message(fmt, *args)


if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 4317
    root = sys.argv[2] if len(sys.argv) > 2 else '.'
    handler = partial(NoCache, directory=root)
    # Bound to every interface, not just loopback, so a phone on the same
    # wifi can open the site and the mobile layout can be checked on real
    # glass. It also means anyone on the network can read this folder while
    # the server runs — fine at a desk, worth knowing on shared wifi.
    import socket
    lan = ''
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(('8.8.8.8', 1)); lan = s.getsockname()[0]; s.close()
    except OSError:
        pass
    print(f'serving {root} on http://localhost:{port}  (no-store)')
    if lan:
        print(f'  on this network:  http://{lan}:{port}')
    ThreadingHTTPServer(('0.0.0.0', port), handler).serve_forever()
