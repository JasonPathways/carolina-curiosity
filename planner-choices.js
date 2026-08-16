const DESTINATION_PICKS={
  little_switzerland:{title:'Pick one specific mountain stop',intro:'Choose the kind of stop that fits your mood instead of being told to “browse somewhere nearby.”',picks:[
    {icon:'📚',name:'Little Switzerland Books & Beans',bestFor:'Best for books + coffee',why:'A three-story independent bookstore and espresso bar just off the Blue Ridge Parkway.',place:'Little Switzerland Books & Beans, 9426 NC-226A, Little Switzerland, NC',note:'Great low-pressure browse stop before or after the scenic portion of the day.',dog:'Patio/outdoor fit; verify indoor pet policy.'},
    {icon:'🎨',name:'Toe River Arts — Spruce Pine Gallery',bestFor:'Best for regional art',why:'A downtown gallery and gift shop focused on contemporary work and regional craft from the Toe River Valley.',place:'Toe River Arts, 269 Oak Ave, Spruce Pine, NC',note:'Strong choice if you want locally made work without a long gallery crawl.',dog:'Indoor gallery; verify pet policy before entering.'},
    {icon:'🧶',name:'Penland Gallery & Visitors Center',bestFor:'Best for serious craft',why:'A destination gallery connected to Penland School of Craft, with ceramics, glass, textiles, metals, wood, and more.',place:'Penland Gallery and Visitors Center, 3135 Conley Ridge Rd, Bakersville, NC',note:'Best for a craft-focused day; it adds a detour, so use it when your schedule has room.',dog:'Indoor gallery; plan this as a non-dog stop unless current policy says otherwise.'}
  ]},
  asheville:{title:'Pick one specific Asheville art stop',intro:'These are intentionally different: ceramics, design/vintage, woodworking, or an outdoor art wander.',picks:[
    {icon:'🏺',name:'Odyssey Gallery of Ceramic Arts',bestFor:'Best for ceramics',why:'A River Arts District cooperative gallery focused entirely on functional and sculptural ceramic work.',place:'Odyssey Gallery of Ceramic Arts, 238 Clingman Ave, Asheville, NC',note:'A focused stop when you want to see one medium deeply rather than wander dozens of studios.',dog:'Indoor gallery; verify pet policy.'},
    {icon:'🛋️',name:'Marquee',bestFor:'Best for eclectic browsing',why:'A large design-centric marketplace in the River Arts District with art, vintage finds, jewelry, décor, and regional makers.',place:'Marquee, 36 Foundy St, Asheville, NC',note:'Useful when different people in the group want different kinds of things to browse.',dog:'Currently listed as dog-friendly; confirm before entering.'},
    {icon:'🪵',name:'Foundation Woodworks',bestFor:'Best for local craftsmanship',why:'A working woodshop and gallery with locally made furniture, sculpture, kitchen pieces, jewelry, and gifts.',place:'Foundation Woodworks, 17 Foundy St, Asheville, NC',note:'Distinctive Asheville maker stop and easy to pair with nearby River Arts District food and drink.',dog:'Currently listed as dog-friendly; confirm before entering.'},
    {icon:'🎨',name:'River Arts District public-art wander',bestFor:'Best for staying outside',why:'Walk a compact section of the River Arts District for murals, public art, working-studio exteriors, and the riverfront setting.',place:'River Arts District, 3 River Arts Pl, Asheville, NC',note:'Best flexible choice when you want art without committing to an indoor gallery.',dog:'Good dog option; keep your dog leashed and follow individual studio rules.'}
  ]},
  boone:{title:'Pick one specific Blowing Rock / Boone stop',intro:'Choose local art, Appalachian history, or an outdoor art experience.',picks:[
    {icon:'🎁',name:'ArtWalk',bestFor:'Best for locally made gifts',why:'A downtown Blowing Rock gallery and shop featuring pottery, photography, jewelry, wood, glass, and other handcrafted work.',place:'ArtWalk, 1087 Main St, Blowing Rock, NC',note:'Easy to fit into a Main Street walk and a strong choice if you want something made in the Carolinas.',dog:'Currently listed as pet-friendly.'},
    {icon:'🏛️',name:'Blowing Rock Art & History Museum',bestFor:'Best for art + local history',why:'BRAHM combines changing art exhibitions with Appalachian and Blowing Rock history in one downtown stop.',place:'Blowing Rock Art & History Museum, 159 Ginny Stevens Ln, Blowing Rock, NC',note:'Best when you want more interpretation and context than a retail gallery provides.',dog:'Indoor museum; use a dog-friendly alternative unless current policy permits pets.'},
    {icon:'🗿',name:'Blowing Rock Art & Sculpture Trail',bestFor:'Best for staying outside',why:'A self-guided way to add public art and sculpture to a downtown walk without committing to another indoor attraction.',place:'Blowing Rock, NC',note:'Good add-on when the weather is nice and you want to keep moving.',dog:'Good dog option for outdoor portions; keep your dog leashed.'}
  ]},
  charlotte:{title:'Pick one specific Charlotte creative stop',intro:'Choose an artist-run gallery, an outdoor street-art stop, or a local-maker shop.',picks:[
    {icon:'🖼️',name:'Goodyear Arts',bestFor:'Best for artist-run contemporary art',why:'An artist-run nonprofit gallery at Camp North End with exhibitions, readings, screenings, and performances.',place:'Goodyear Arts, 301 Camp Rd #200, Charlotte, NC',note:'A strong local-art choice, but public gallery hours are limited—check before building the day around it.',dog:'Indoor gallery; verify current pet policy.'},
    {icon:'🎨',name:'TAOH Outdoor Gallery',bestFor:'Best for street art',why:'A dedicated outdoor graffiti and public-art space in the Optimist Park / NoDa area.',place:'TAOH Outdoor Gallery, 2200 N Brevard St, Charlotte, NC',note:'One of the easiest truly outdoor creative stops to add without needing tickets or a long visit.',dog:'Strong dog option; outdoor setting.'},
    {icon:'🛍️',name:'FRESH PRODUCE by DUPP&SWAT',bestFor:'Best for local makers',why:'A Camp North End boutique that mixes retail, local creative work, and a mini-gallery feel.',place:'FRESH PRODUCE by DUPP&SWAT, 1824 Statesville Ave Unit 109, Charlotte, NC',note:'Best when you want a distinctly Charlotte shopping stop rather than a national retailer.',dog:'Indoor shop; verify pet policy.'},
    {icon:'👩‍🎨',name:'Charlotte Studio Artists',bestFor:'Best for meeting local artists',why:'An artist-led NoDa collective with working studios and a public-facing gallery featuring dozens of local artists.',place:'Charlotte Studio Artists, 3045 N Davidson St, Charlotte, NC',note:'Excellent when open, but public hours can be limited—check the day before.',dog:'Indoor studios; verify current pet policy.'}
  ]},
  west_jefferson:{title:'Pick one specific West Jefferson stop',intro:'Four different kinds of stops, so you can choose what fits your mood instead of being told to “find a gallery or shop.”',picks:[
    {icon:'📷',name:'CatchLight Gallery',bestFor:'Best for photography',why:'A downtown gallery devoted specifically to fine-art photography by local and regional photographers.',place:'CatchLight Gallery, 118 N Jefferson Ave, West Jefferson, NC',note:'Good choice when you want a focused art stop rather than general shopping.',dog:'Indoor gallery; verify pet policy.'},
    {icon:'🏺',name:'Doe Ridge Pottery',bestFor:'Best for locally made craft',why:'A working pottery studio and gallery with handmade ceramics from multiple High Country artists.',place:'Doe Ridge Pottery, 125 Graybeal Ave, West Jefferson, NC',note:'Especially strong if you want to bring home something made locally.',dog:'Indoor studio/shop; verify pet policy.'},
    {icon:'🎨',name:'Downtown Mural Walk',bestFor:'Best for staying outside',why:'West Jefferson has more than 15 downtown murals, making this an easy self-guided public-art walk.',place:'Ashe Arts Center, 303 School Ave, West Jefferson, NC',note:'A natural choice with a dog; use the mural map and wander at your own pace.',dog:'Strong dog option; outdoor walk.'},
    {icon:'🧀',name:'Ashe County Cheese',bestFor:'Best for local flavor',why:'A long-running downtown cheese shop and factory stop closely tied to West Jefferson’s identity.',place:'Ashe County Cheese, 106 E Main St, West Jefferson, NC',note:'Choose this when you want a distinctly local shop rather than another gallery.',dog:'Shop/factory setting; verify pet policy.'}
  ]}
};

const LUNCH_PICKS={
  little_switzerland:{
    picnic:{name:'Orchard at Altapass picnic',why:'Pack or pick up lunch and eat with mountain views at the orchard picnic area.',place:'Orchard at Altapass, 1025 Orchard Rd, Spruce Pine, NC',dog:'Excellent dog-day choice; keep dogs leashed and confirm current orchard rules.'},
    restaurants:[
      {name:'Switzerland Cafe',tag:'Most distinctly Little Switzerland',why:'A long-running mountain café and smokehouse known for smoked trout, BBQ, sandwiches, soups, and desserts.',place:'Switzerland Cafe, 9440 NC-226A, Little Switzerland, NC',dog:'Outdoor seating is currently listed as dog-friendly.'},
      {name:'Fox & The Fig',tag:'Best café-style lunch',why:'A locally loved Spruce Pine café with scratch-made breads, bagels, baked goods, coffee, and lighter lunch options.',place:'Fox and the Fig, 615 Oak Ave, Spruce Pine, NC',dog:'Dogs are currently listed as welcome outside.'},
      {name:'DT’s Blue Ridge Java',tag:'Best quick downtown option',why:'A family-owned Spruce Pine café with sandwiches, coffee, gluten-free options, and local artwork.',place:'DT’s Blue Ridge Java, 169 Locust St, Spruce Pine, NC',dog:'Dogs are currently listed as welcome outside.'}
    ]
  },
  asheville:{
    picnic:{name:'French Broad River picnic',why:'Pick up something portable in the River Arts District and eat near the greenway or another public riverfront space.',place:'French Broad River Greenway, Asheville, NC',dog:'Strong dog option for an outdoor lunch.'},
    restaurants:[
      {name:'Baby Bull',tag:'Best casual burger stop',why:'A compact River Arts District counter-service spot known for burgers and sandwiches; easy to fit between art stops.',place:'Baby Bull, 1 Roberts St, Asheville, NC',dog:'Dogs are currently listed as allowed on the outdoor terrace.'},
      {name:'Ultra Coffeebar',tag:'Best lighter lunch',why:'Bagels, sandwiches, salads, coffee, and vegan/vegetarian choices right in the River Arts District.',place:'Ultra Coffeebar, 242 Clingman Ave Ext, Asheville, NC',dog:'Currently listed as dog-friendly, including outdoor seating.'},
      {name:'Piccolina',tag:'Best something-special lunch',why:'An intimate Italian spot inside an arts building with pizza, sandwiches, pastries, and a strong connection to the district.',place:'Piccolina, 375 Depot St #101, Asheville, NC',dog:'Treat this as the non-dog choice unless current policy says otherwise.'}
    ]
  },
  boone:{
    picnic:{name:'Bass Lake picnic',why:'Bring or pick up lunch and use the Bass Lake area for a relaxed outdoor break before returning to Blowing Rock.',place:'Bass Lake, Blowing Rock, NC',dog:'Excellent dog-day choice; keep dogs leashed.'},
    restaurants:[
      {name:'The Speckled Trout',tag:'Best signature High Country meal',why:'A downtown Blowing Rock restaurant built around Appalachian food and mountain trout.',place:'The Speckled Trout, 922 Main St, Blowing Rock, NC',dog:'Outdoor seating is currently listed as dog-friendly.'},
      {name:'Social on Main',tag:'Best brunch-to-lunch option',why:'A downtown breakfast-and-lunch spot with Southern-leaning comfort food, salads, and sandwiches.',place:'Social on Main, 870 Main St, Blowing Rock, NC',dog:'The outdoor patio is currently listed as dog-friendly.'},
      {name:'Downtown takeout + park bench',tag:'Best keep-moving option',why:'Choose a local Main Street sandwich or bakery takeout and keep more time for the High Country stops.',place:'Main St, Blowing Rock, NC',dog:'Easy choice when traveling with a dog because you can stay outdoors.'}
    ]
  },
  charlotte:{
    picnic:{name:'Freedom Park picnic',why:'Bring or pick up lunch and eat by the lake before continuing toward South End or Camp North End.',place:'Freedom Park, 1908 East Blvd, Charlotte, NC',dog:'Strong dog option; keep dogs leashed and follow park rules.'},
    restaurants:[
      {name:'Surefire Market',tag:'Best Camp North End comfort food',why:'A Charlotte-based Camp North End spot for smash burgers and crispy chicken sandwiches with a distinctive Congolese-inspired spice influence.',place:'Surefire Market, 301 Camp Rd #101, Charlotte, NC',dog:'Dogs are currently listed as allowed outside.'},
      {name:'La Caseta',tag:'Best local street-food choice',why:'Handmade Latin American street food—pupusas, tacos, arepas, and empanadas—inside Camp North End.',place:'La Caseta, 1801 N Graham St #203, Charlotte, NC',dog:'Outdoor seating is currently listed as dog-friendly.'},
      {name:'Common Market SouthEnd',tag:'Best casual Rail Trail lunch',why:'A quirky Charlotte deli/bodega with sandwiches, local beer, and an easy patio stop near the Rail Trail.',place:'Common Market SouthEnd, 235 W Tremont Ave, Charlotte, NC',dog:'Currently listed as dog-friendly inside and outside.'}
    ]
  },
  west_jefferson:{
    picnic:{name:'Mount Jefferson picnic',why:'Pick up lunch downtown and eat at the state natural area with mountain views before or after a short walk.',place:'Mount Jefferson State Natural Area, 1481 Mt Jefferson State Park Rd, West Jefferson, NC',dog:'Excellent dog-day choice; pets are allowed on leash under current park rules.'},
    restaurants:[
      {name:'Havana Cafe',tag:'Best quick local lunch',why:'A small downtown Cuban-inspired café known for Cuban sandwiches, burgers, plantains, and Cuban coffee.',place:'Havana Cafe, 109 BackStreet, West Jefferson, NC',dog:'Current listings do not mark it dog-friendly; use picnic or another patio choice with a dog.'},
      {name:'Thong Summit Thai & Sushi',tag:'Best change-of-pace lunch',why:'A downtown Thai-and-sushi spot with a broad menu and outdoor seating.',place:'Thong Summit Thai & Sushi, 401 S Jefferson Ave, West Jefferson, NC',dog:'Recent visitor reports mention dog-friendly outdoor seating; confirm day-of.'},
      {name:'Sweet & Savory Bakery & Deli',tag:'Best soup-and-sandwich lunch',why:'A locally popular bakery/deli for soups, panini-style sandwiches, wraps, salads, and desserts.',place:'Sweet & Savory Bakery & Deli, 6 S Jefferson Ave, West Jefferson, NC',dog:'Verify current outdoor seating and pet policy before choosing this with a dog.'}
    ]
  }
};

function choiceMap(place){const url='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(place);return `<a class="btn" style="display:inline-block;margin-top:8px;text-decoration:none" target="_blank" rel="noopener" href="${url}">Map this stop</a>`}
function infoCard(icon,label,name,why,place,note,dog){return `<div class="card" style="margin-top:10px"><div style="font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:var(--gold)">${icon} ${label}</div><div class="serif" style="font-size:22px;margin-top:4px">${name}</div><div style="margin-top:6px">${why}</div>${note?`<div class="muted" style="font-size:13px;margin-top:7px">${note}</div>`:''}${dog?`<div style="font-size:13px;margin-top:7px"><b>🐾 Dog note:</b> ${dog}</div>`:''}${choiceMap(place)}</div>`}
function renderLunchChoices(key){
  const result=document.getElementById('planResult'),set=LUNCH_PICKS[key]; if(!result||!set)return;
  const pref=document.getElementById('planFood')?.value||'either',dogOn=document.getElementById('planDog')?.checked;
  let cards='';
  if(pref==='picnic'||pref==='either') cards+=infoCard('🧺','Picnic option',set.picnic.name,set.picnic.why,set.picnic.place,'A specific picnic plan so “picnic” still tells you where to go.',dogOn?set.picnic.dog:'');
  if(pref==='restaurant'||pref==='either') cards+=set.restaurants.map(r=>infoCard('🍽️',r.tag,r.name,r.why,r.place,'Selected for route fit, local character, and current operating/review signals.',dogOn?r.dog:'')).join('');
  const block=document.createElement('div'); block.id='lunchChoices';
  block.innerHTML=`<div class="card" style="margin-top:14px;border-left:4px solid var(--gold)"><div style="font-size:11px;text-transform:uppercase;letter-spacing:.16em;color:var(--gold)">Choose lunch</div><div class="serif" style="font-size:26px;margin-top:4px">A specific food plan for the day</div><div class="muted" style="margin-top:6px">${pref==='picnic'?'Your picnic preference is shown below.':pref==='restaurant'?'Three curated local restaurant choices—enough variety without turning Carolina Curiosity into a restaurant directory.':'One picnic plan plus three local choices. Pick what fits the day.'}</div></div>${cards}`;
  result.appendChild(block);
}
function renderDestinationChoices(key){
  const result=document.getElementById('planResult'),set=DESTINATION_PICKS[key]; if(!result||!set)return;
  const dog=document.getElementById('planDog')?.checked;
  const cards=set.picks.map(p=>infoCard(p.icon,p.bestFor,p.name,p.why,p.place,p.note,dog?p.dog:'')).join('');
  const block=document.createElement('div'); block.id='destinationChoices';
  block.innerHTML=`<div class="card" style="margin-top:14px;border-left:4px solid var(--gold)"><div style="font-size:11px;text-transform:uppercase;letter-spacing:.16em;color:var(--gold)">Choose your curiosity</div><div class="serif" style="font-size:26px;margin-top:4px">${set.title}</div><div class="muted" style="margin-top:6px">${set.intro}</div></div>${cards}<div class="muted" style="font-size:12px;margin:10px 2px 18px">Carolina Curiosity recommendations are curated from current official/local tourism information and recent visitor signals when available. We have not personally visited every stop. Confirm current hours, closures, admission details, and pet policies before you go.</div>`;
  result.appendChild(block);
}
(function attachChoiceEnhancer(){let tries=0;const timer=setInterval(()=>{tries++;const btn=document.getElementById('buildDay');if(btn&&typeof window.buildDay==='function'){clearInterval(timer);const original=window.buildDay;btn.onclick=()=>{original();const key=document.getElementById('planDestination')?.value;renderLunchChoices(key);renderDestinationChoices(key)}}else if(tries>50){clearInterval(timer)}},100)})();
