/* ============================================================
   WHEELS ON FIRE — shared tour data (tours.html + contact.html)

   The six tours the client runs, in their running order.

   FROM THE CLIENT: names, bike type, levels, durations, terrain and
   the descriptions + highlights for Forest to Coast, Volcanic Tales,
   Enduro Paradise and the Private Tour.

   STILL WRITTEN FOR THE LAYOUT, needs the guides' sign-off: the
   `long` prose and `segments` ride-plan on every tour, and the
   `alti` profiles, which are indicative rather than surveyed.
   Tours with no altimetry at all simply omit `alti` and the overlay
   shows a dash for the high point.

   Route traces and elevation charts are switched off site-wide
   (SHOW_ROUTE in tours.html) so the real trail lines stay private;
   tours-geo.js is therefore no longer merged in.
   ============================================================ */
window.WOF_TOURS = [
{
  id:'westside', no:'01', name:'Westside', type:'mtb', theme:'var(--t-west)',
  durations:['half','full'], levels:['intermediate','advanced'], level:'advanced',
  chips:['MTB','Intermediate / Advanced','Half + Full day'],
  terrain:'Singletrack / Flowy / Steep / Technical / Drops & Jumps, some with gaps / dirt to loose volcanic rocks',
  difficulty:{eu:'Equivalent to blue – red trails', us:'Equivalent to blue, black to double black in some parts'},
  region:'Sete Cidades — west', riders:'3',
  desc:'Get to know the real side of this island, get surrounded by green volcanic slopes, lagoons, forests and the wild atlantic coast and its dark cliffs, all in one day. Dirt to dry and loose volcanic terrain. Explore local built trails by local passionate trailbuilders while having a full blast of fun on a MTB.',
  pending:false,
  lede:'The crater rim, the two lakes, and the steepest loam on the island.',
  long:[
    'The west end of São Miguel is one enormous collapsed volcano with two lakes sitting inside it. We ride the rim, drop into the caldera, and climb back out on old farm tracks that most visitors never see.',
    'This is the day for people who want it steep. Loose over hard, tight switchbacks between hydrangeas, and one descent that does not let go until you are at lake level.'
  ],
  highlights:[
    'Expect fun flowy trails with some tech, small jumps and drops, all built by local trail builders',
    'From forest to sea, dirt to loose volcanic rocks, you’re in for a wild one',
    'Surrounded by green volcanic slopes, forests, pastures, lagoons, dramatic Atlantic coastline and dark cliffs, all in one day',
    'Expect unpredictable weather, mud to loam to dry volcanic terrain'
  ],
  segments:[
    {t:'Pick-up', d:'Early start — the west side holds its best light in the morning.'},
    {t:'Rim traverse', d:'A rolling ridge ride with the caldera on one side, the ocean on the other.'},
    {t:'First drop', d:'Into the crater on tight, steep singletrack.'},
    {t:'Lakeside lunch', d:'Refuel in the village between the two lakes.'},
    {t:'Climb out', d:'Back up the far wall on old farm track.'},
    {t:'Final descent', d:'The long one — sustained steep loam to the finish.'}
  ],
  stats:{dist:'13.1', up:'845', time:'5–6'},
  rates:{half:{hrs:'3–4', price:'€160 p/person'}, full:{hrs:'5–6', price:'€180 p/person'}},
  price:'From <b>160€</b>', priceNote:'Half day 160€ · full day 180€ · from 110€ with your own bike',
  pin:{x:215, y:225},
  alti:[268,294,328,350,387,419,438,462,466,498,522,536,550,551,567,581,575,614,621,633,615,583,574,547,564,564,480,390,300,200,120,60],
  hero:'assets/tours/westside-1.jpg',
  focus:'57%',
  gal:['assets/tours/westside-2.jpg','assets/tours/westside-3.jpg','assets/tours/westside-4.jpg',
       'assets/tours/westside-5.jpg','assets/tours/westside-6.jpg','assets/tours/westside-7.jpg']
},
{
  id:'forest', no:'02', name:'Forest to Coast', type:'mtb', theme:'var(--t-forest)',
  durations:['half'], levels:['alllevels'], level:'alllevels',
  chips:['MTB','All levels','Half day'],
  terrain:'Singletrack / Rocks / Roots / Some technical parts / Cross country / Flowy & easy going trails / Gravel / Off road',
  difficulty:{eu:'Equivalent to green, blue and some parts red', us:'Equivalent to green and blue'},
  region:'Ribeira Grande — north coast', riders:'3',
  /* client copy */
  desc:'An all level adventure where you get to explore a combination of volcanic hills, forests, the island’s natural diversity and its shades of green, and the mesmerizing scenic views of black volcanic cliffs by the wild Atlantic sea.',
  note:'* Tour can be customized depending on the skill level of riders.',
  pending:false,
  lede:'Cryptomeria forest at the top, Atlantic at the bottom, and a green tunnel in between.',
  long:[
    'We shuttle you up into the cryptomeria plantations above Ribeira Grande, where the air is cooler and the light comes through in stripes. From there it is almost all downhill — wide forest road to warm up, then a soft, loamy singletrack that keeps turning under the ferns.',
    'The last third opens out. The trees stop, the horizon arrives all at once, and you finish rolling along the volcanic cliffs with the sea on your left. It is the ride we give people who have never touched a real trail, and the one experienced riders ask to do again at the end of the week.'
  ],
  highlights:[
    'Ride through hilly volcanic forests, singletracks and off-road forest gravel roads',
    'Explore the botanical diversity of the surroundings and forests',
    'Explore a natural volcanic geological formation and, depending on the weather, dip in a natural swimming pool surrounded by dark basaltic rock and lava formations'
  ],
  segments:[
    {t:'Pick-up', d:'We collect you in the central part of the island and load the bikes.'},
    {t:'Shuttle up', d:'Roughly 30 minutes of dirt road into the forest above Ribeira Grande.'},
    {t:'Fit &amp; brief', d:'Bike setup, POC gear, and a short skills check on easy ground.'},
    {t:'The green tunnel', d:'The main descent — soft, flowing singletrack through fern and cryptomeria.'},
    {t:'Coast traverse', d:'Out of the trees and along the cliff line with the sea below.'},
    {t:'Drop off', d:'Back to your accommodation, usually mid-afternoon.'}
  ],
  stats:{dist:'18', up:'450', time:'3–4'},
  rates:{half:{hrs:'3–4', price:'€150 p/person'}},
  price:'From <b>150€</b>', priceNote:'per rider, all included · 110€ with your own bike',
  pin:{x:790, y:430},
  alti:[130,120,145,190,240,300,340,310,260,210,150,90,40,20],
  hero:'assets/tours/forest-2.jpg',
  focus:'66%',
  gal:['assets/tours/forest-1.jpg','assets/tours/forest-3.jpg']
},
{
  id:'enduro', no:'03', name:'Enduro Paradise', type:'mtb', theme:'var(--t-ridge)',
  durations:['full'], levels:['intermediate','advanced'], level:'advanced',
  chips:['MTB','Intermediate / Advanced','Full day'],
  terrain:'Singletrack / Rocks / Roots / Steeper descends and sustained technical sections / Tight switchbacks / Off-camber / Exposed sections',
  difficulty:{eu:'Equivalent to red and black trails', us:'Equivalent to blue, black to double black in some parts'},
  region:'São Miguel — ridges &amp; river valleys', riders:'3',
  /* A safety condition, not a note: this one is read wherever the tour is
     offered — on its own page and in the booking flow — so it lives here
     rather than being written into either of them. */
  warn:'Disclaimer: This tour is highly weather-dependent and can *only happen in dry conditions* due to exposed and technical sections.',
  /* client copy */
  desc:'Where Azorean history merges with a MTB adventure. From forest to ancient trails and breathtaking views, there’s no other way you would like to explore this part of the island rather than by bike. Full day of action, pure enduro!',
  note:'* Recommended to experienced riders.',
  pending:false,
  lede:'Volcanic ridges, ancient descents into river valleys, and Japanese cedar the whole way down.',
  long:[
    'This is the full day for riders who already know what they are doing. We link mountain ridges shaped by deep erosion, with the coast opening up on both sides, then drop into the river valleys on ancient trails that have carried people across this island for centuries.',
    'The forest sections are the reward — lush, close and fast, running through Japanese cedar and native vegetation. Rocks, roots and steep, technical ground throughout. Pure enduro.'
  ],
  /* client copy */
  highlights:[
    'Ride through breathtaking volcanic valleys, shaped by deep erosion with coastal panoramas',
    'Fast & ancient descends through forests and old stone paths into river valleys',
    'Ride through lush forest trails surrounded by Japanese cedar and native vegetation'
  ],
  segments:[
    {t:'Pick-up', d:'We collect you in the central part of the island and load the bikes.'},
    {t:'Shuttle up', d:'Dirt road to the ridgeline — the climbing is done for you.'},
    {t:'Fit &amp; brief', d:'Bike setup, POC gear, and a look at the day ahead.'},
    {t:'The ridges', d:'Exposed volcanic ridgeline with the coast on both sides.'},
    {t:'Into the valleys', d:'Ancient trails dropping fast towards the river.'},
    {t:'Cedar forest', d:'The last descent, tight and green, through Japanese cedar.'},
    {t:'Drop off', d:'Back to your accommodation at the end of the day.'}
  ],
  stats:{dist:'—', up:'—', time:'5–6'},
  rates:{full:{hrs:'5–6', price:'€180 p/person'}},
  price:'From <b>180€</b>', priceNote:'per rider, all included · 160€ with your own bike',
  pin:{x:1830, y:560},
  hero:'assets/tours/enduro-3.jpg',
  focus:'49%',
  gal:['assets/tours/enduro-1.jpg','assets/tours/enduro-2.jpg','assets/tours/enduro-4.jpg',
       'assets/tours/enduro-5.jpg','assets/tours/enduro-6.jpg','assets/tours/enduro-7.jpg']
},
{
  id:'fogo', no:'04', name:'Traverse of the Wild', type:'emtb', theme:'var(--t-fogo)',
  durations:['full'], levels:['alllevels'], level:'alllevels',
  chips:['E-MTB','All levels','Full day'],
  terrain:'Cross country / Mix of gravel, road and off-road & ancient paths / Climbs & descends',
  difficulty:{eu:'Equivalent to green, blue', us:'Equivalent to green'},
  region:'Lagoa do Fogo — centre', riders:'3',
  desc:'Explore the wilderness and expect the unexpected — this is the traverse of the wild. Here the weather is the ruler of this adventure quest. You’ll ride along quiet volcanic highlands and immerse in its unpredictable landscapes filled with endemic lush green vegetation and forests, crossing beyond that allows you to observe the island’s ever changing nature.',
  note:'* Good endurance and fitness are essential.',
  pending:false,
  lede:'High above the caldera, on paths that have been there for centuries.',
  long:[
    'Lagoa do Fogo sits in a protected reserve in the middle of the island, and the weather up there writes its own rules. We ride the exposed ground above the lake — no fences, no signs, just the ridge and whatever the cloud is doing that day.',
    'The e-bike earns its place here. It lets us link backcountry sections that would otherwise be a full day of pushing, so you spend the day riding instead of walking.'
  ],
  highlights:[
    'Observe how the weather, volcanic nature and Atlantic scenery shape the surroundings',
    'Taste nature’s finest natural sparkling water straight from the spring',
    'Ride through quiet volcanic highlands, where every corner tells you the history that is ever changing and shaped by the high altitude weather patterns',
    'If you’re lucky, capture 360º degrees of endless horizon',
    'Immerse in the unpredictable weather that makes you feel alive — never underestimate a good rain coat!'
  ],
  segments:[
    {t:'Pick-up', d:'We start early — the lake is usually clearest before midday.'},
    {t:'Climb to the rim', d:'Motor on, up the old track to the viewpoint.'},
    {t:'The ridge', d:'Exposed riding along the caldera edge.'},
    {t:'Backcountry link', d:'Off the main paths into the reserve proper.'},
    {t:'Long descent', d:'Down the south side towards the coast.'},
    {t:'Drop off', d:'Back to base, muddy.'}
  ],
  stats:{dist:'36', up:'1250', time:'5–6'},
  rates:{full:{hrs:'5–6', price:'On request'}},
  price:'On request', priceNote:'E-MTB full day — price on request',
  pin:{x:1180, y:520},
  alti:[80,180,300,420,540,600,560,470,520,580,460,320,190,80],
  hero:'assets/tours/fogo-2.jpg',
  focus:'62%',
  gal:['assets/tours/fogo-1.jpg','assets/tours/fogo-3.jpg']
},
{
  id:'volcanic', no:'05', name:'Volcanic Tales', type:'emtb', theme:'var(--t-volcanic)',
  durations:['half'], levels:['alllevels'], level:'alllevels',
  chips:['E-MTB','All levels','Half day'],
  terrain:'Cross country / Mix of gravel, road and off-road & ancient paths / Climbs & descends',
  difficulty:{eu:'Equivalent to green, blue', us:'Equivalent to green'},
  region:'Furnas &amp; Gorreana — east', riders:'3',
  /* client copy */
  desc:'This is an all levels adventure tour for the ones that want to get out there and experience the real rawness and wild nature of the island.',
  pending:false,
  lede:'More than a tour. A cultural heritage ride that is simply more fun on two wheels.',
  long:[
    'The motor lets us cover the east of the island in a day instead of three. We ride ancient paths between Furnas and the north coast, stop where the ground still steams, and drink sparkling water straight out of the rock.',
    'Then it is on to Gorreana — the oldest tea plantation in Europe, still working, still family-run. You ride through the rows, and the whole valley smells like it.'
  ],
  highlights:[
    'Expect scenic views, taste natural sparkling water that flows straight from the volcanic heart of the island',
    'Unpredictable weather that makes you feel alive — never underestimate a good rain coat!',
    'Ride through São Miguel’s volcanic landscape filled with history — agriculture, tradition, geology, wildlife, forest and diversity',
    'Immerse in the quietness of highland landscapes and lagoons beneath volcanic peaks'
  ],
  segments:[
    {t:'Pick-up', d:'We bring the e-bikes to you, charged and set up.'},
    {t:'Furnas caldera', d:'Around the lake, past the steam vents and the cooking pits.'},
    {t:'The spring', d:'Stop and drink — sparkling, straight from the rock.'},
    {t:'Ancient paths', d:'Old paved tracks that linked the villages before the roads.'},
    {t:'Gorreana', d:'Through the tea rows, with a stop at the factory.'},
    {t:'Coast run', d:'Finish along the north coast with the Atlantic beside you.'}
  ],
  stats:{dist:'42', up:'1100', time:'5–6'},
  rates:{half:{hrs:'3–4', price:'On request'}},
  price:'On request', priceNote:'Price on request',
  pin:{x:1690, y:420},
  alti:[40,90,170,250,300,280,340,420,380,300,240,180,110,50],
  hero:'assets/tours/volcanic-1.jpg',
  focus:'64%',
  gal:['assets/tours/volcanic-2.jpg','assets/tours/volcanic-3.jpg',
       'assets/tours/volcanic-4.jpg','assets/tours/volcanic-5.jpg']
},
{
  /* type 'any' so it survives every filter — a private tour is whatever
     bike, length and level you want it to be. */
  id:'custom', no:'06', name:'Private Tour', type:'any', theme:'var(--t-most)',
  durations:['half','full'], levels:['alllevels','intermediate','advanced'], level:'alllevels',
  chips:['MTB / E-MTB','Any level','Half + Full day'],
  /* The one card that carries a line of copy: it is the tour nobody can read
     off a name, and it says what the Private tours section used to say. */
  cardNote:"Are you a solo rider? Do you want to improve your MTB skills? Or just ride with your close ones!",
  terrain:'Tour will be adapted to your MTB skills*',
  region:'São Miguel — wherever you want to ride', riders:'3',
  difficulty:{eu:'From green to black', us:'From blue to double black'},
  /* client copy */
  desc:"Make this your tour. Whether you're one rider or just want to ride with your people — we got you!",
  lede:'One rider or your whole crew. You pick the days, we build the trip.',
  long:[
    'Not everyone wants the same week. Some people have three days and want to ride every trail on the island; others have one afternoon and a nervous partner. Either is fine — we plan it around you.',
    'Tell us how long you are here, what you have ridden before and what you want out of it, and we put the days together: bikes, gear, shuttle, guiding and the route itself.'
  ],
  highlights:[
    'For solo riders',
    'Coaching sessions &mdash; are you new to MTB? Do you want to improve your skills?',
    'You want to ride with your crew or close ones'
  ],
  segments:[
    {t:'Tell us', d:'Dates, how many riders, what you have ridden before.'},
    {t:'We propose', d:'A day-by-day plan with the trails we think fit you.'},
    {t:'You adjust', d:'Swap anything you do not like until it is your trip.'},
    {t:'Ride', d:'We handle bikes, gear, shuttle and guiding on the day.'}
  ],
  stats:{dist:'—', up:'—', time:'—'},
  rates:{half:{hrs:'3–4', price:'On request'}, full:{hrs:'5–6', price:'On request'}},
  price:'On request', priceNote:'quoted once we know the days and the group',
  pin:{x:1000, y:300},
  hero:'assets/tours/custom-hero.jpg',
  /* the rider sits high in this frame — her helmet is around 27% down and the
     front wheel around 55%, so the crop is pulled up to hold both */
  focus:'35%',
  /* custom-card is the photograph this tour used to lead with, kept in the
     gallery now that the client's own main.jpg has taken the hero */
  gal:['assets/tours/custom-1.jpg','assets/tours/custom-2.jpg','assets/tours/custom-3.jpg',
       'assets/tours/custom-card.jpg','assets/tours/custom-4.jpg','assets/tours/custom-5.jpg',
       'assets/tours/custom-6.jpg','assets/tours/custom-7.jpg']
}
];
