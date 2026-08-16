const DESTINATION_PICKS={
  little_switzerland:{
    title:'Pick one specific mountain stop',
    intro:'Choose the kind of stop that fits your mood instead of being told to “browse somewhere nearby.”',
    picks:[
      {icon:'📚',name:'Little Switzerland Books & Beans',bestFor:'Best for books + coffee',why:'A three-story independent bookstore and espresso bar just off the Blue Ridge Parkway.',place:'Little Switzerland Books & Beans, 9426 NC-226A, Little Switzerland, NC',note:'Great low-pressure browse stop before or after the scenic portion of the day.',dog:'Patio/outdoor fit; verify indoor pet policy.'},
      {icon:'🎨',name:'Toe River Arts — Spruce Pine Gallery',bestFor:'Best for regional art',why:'A downtown gallery and gift shop focused on contemporary work and regional craft from the Toe River Valley.',place:'Toe River Arts, 269 Oak Ave, Spruce Pine, NC',note:'Strong choice if you want locally made work without a long gallery crawl.',dog:'Indoor gallery; verify pet policy before entering.'},
      {icon:'🧶',name:'Penland Gallery & Visitors Center',bestFor:'Best for serious craft',why:'A destination gallery connected to Penland School of Craft, with ceramics, glass, textiles, metals, wood, and more.',place:'Penland Gallery and Visitors Center, 3135 Conley Ridge Rd, Bakersville, NC',note:'Best for a craft-focused day; it adds a detour, so use it when your schedule has room.',dog:'Indoor gallery; plan this as a non-dog stop unless current policy says otherwise.'}
    ]
  },
  asheville:{
    title:'Pick one specific Asheville art stop',
    intro:'These are intentionally different: ceramics, design/vintage, woodworking, or an outdoor art wander.',
    picks:[
      {icon:'🏺',name:'Odyssey Gallery of Ceramic Arts',bestFor:'Best for ceramics',why:'A River Arts District cooperative gallery focused entirely on functional and sculptural ceramic work.',place:'Odyssey Gallery of Ceramic Arts, 238 Clingman Ave, Asheville, NC',note:'A focused stop when you want to see one medium deeply rather than wander dozens of studios.',dog:'Indoor gallery; verify pet policy.'},
      {icon:'🛋️',name:'Marquee',bestFor:'Best for eclectic browsing',why:'A large design-centric marketplace in the River Arts District with art, vintage finds, jewelry, décor, and regional makers.',place:'Marquee, 36 Foundy St, Asheville, NC',note:'Useful when different people in the group want different kinds of things to browse.',dog:'Currently listed as dog-friendly; confirm before entering.'},
      {icon:'🪵',name:'Foundation Woodworks',bestFor:'Best for local craftsmanship',why:'A working woodshop and gallery with locally made furniture, sculpture, kitchen pieces, jewelry, and gifts.',place:'Foundation Woodworks, 17 Foundy St, Asheville, NC',note:'Distinctive Asheville maker stop and easy to pair with nearby River Arts District food and drink.',dog:'Currently listed as dog-friendly; confirm before entering.'},
      {icon:'🎨',name:'River Arts District public-art wander',bestFor:'Best for staying outside',why:'Walk a compact section of the River Arts District for murals, public art, working-studio exteriors, and the riverfront setting.',place:'River Arts District, 3 River Arts Pl, Asheville, NC',note:'Best flexible choice when you want art without committing to an indoor gallery.',dog:'Good dog option; keep your dog leashed and follow individual studio rules.'}
    ]
  },
  boone:{
    title:'Pick one specific Blowing Rock / Boone stop',
    intro:'Choose local art, Appalachian history, or an outdoor art experience.',
    picks:[
      {icon:'🎁',name:'ArtWalk',bestFor:'Best for locally made gifts',why:'A downtown Blowing Rock gallery and shop featuring pottery, photography, jewelry, wood, glass, and other handcrafted work.',place:'ArtWalk, 1087 Main St, Blowing Rock, NC',note:'Easy to fit into a Main Street walk and a strong choice if you want something made in the Carolinas.',dog:'Currently listed as pet-friendly.'},
      {icon:'🏛️',name:'Blowing Rock Art & History Museum',bestFor:'Best for art + local history',why:'BRAHM combines changing art exhibitions with Appalachian and Blowing Rock history in one downtown stop.',place:'Blowing Rock Art & History Museum, 159 Ginny Stevens Ln, Blowing Rock, NC',note:'Best when you want more interpretation and context than a retail gallery provides.',dog:'Indoor museum; use a dog-friendly alternative unless current policy permits pets.'},
      {icon:'🗿',name:'Blowing Rock Art & Sculpture Trail',bestFor:'Best for staying outside',why:'A self-guided way to add public art and sculpture to a downtown walk without committing to another indoor attraction.',place:'Blowing Rock, NC',note:'Good add-on when the weather is nice and you want to keep moving.',dog:'Good dog option for outdoor portions; keep your dog leashed.'}
    ]
  },
  charlotte:{
    title:'Pick one specific Charlotte creative stop',
    intro:'Choose an artist-run gallery, an outdoor street-art stop, or a local-maker shop.',
    picks:[
      {icon:'🖼️',name:'Goodyear Arts',bestFor:'Best for artist-run contemporary art',why:'An artist-run nonprofit gallery at Camp North End with exhibitions, readings, screenings, and performances.',place:'Goodyear Arts, 301 Camp Rd #200, Charlotte, NC',note:'A strong local-art choice, but public gallery hours are limited—check before building the day around it.',dog:'Indoor gallery; verify current pet policy.'},
      {icon:'🎨',name:'TAOH Outdoor Gallery',bestFor:'Best for street art',why:'A dedicated outdoor graffiti and public-art space in the Optimist Park / NoDa area.',place:'TAOH Outdoor Gallery, 2200 N Brevard St, Charlotte, NC',note:'One of the easiest truly outdoor creative stops to add without needing tickets or a long visit.',dog:'Strong dog option; outdoor setting.'},
      {icon:'🛍️',name:'FRESH PRODUCE by DUPP&SWAT',bestFor:'Best for local makers',why:'A Camp North End boutique that mixes retail, local creative work, and a mini-gallery feel.',place:'FRESH PRODUCE by DUPP&SWAT, 1824 Statesville Ave Unit 109, Charlotte, NC',note:'Best when you want a distinctly Charlotte shopping stop rather than a national retailer.',dog:'Indoor shop; verify pet policy.'},
      {icon:'👩‍🎨',name:'Charlotte Studio Artists',bestFor:'Best for meeting local artists',why:'An artist-led NoDa collective with working studios and a public-facing gallery featuring dozens of local artists.',place:'Charlotte Studio Artists, 3045 N Davidson St, Charlotte, NC',note:'Excellent when open, but public hours can be limited—check the day before.',dog:'Indoor studios; verify current pet policy.'}
    ]
  },
  west_jefferson:{
    title:'Pick one specific West Jefferson stop',
    intro:'Four different kinds of stops, so you can choose what fits your mood instead of being told to “find a gallery or shop.”',
    picks:[
      {icon:'📷',name:'CatchLight Gallery',bestFor:'Best for photography',why:'A downtown gallery devoted specifically to fine-art photography by local and regional photographers.',place:'CatchLight Gallery, 118 N Jefferson Ave, West Jefferson, NC',note:'Good choice when you want a focused art stop rather than general shopping.',dog:'Indoor gallery; verify pet policy.'},
      {icon:'🏺',name:'Doe Ridge Pottery',bestFor:'Best for locally made craft',why:'A working pottery studio and gallery with handmade ceramics from multiple High Country artists.',place:'Doe Ridge Pottery, 125 Graybeal Ave, West Jefferson, NC',note:'Especially strong if you want to bring home something made locally.',dog:'Indoor studio/shop; verify pet policy.'},
      {icon:'🎨',name:'Downtown Mural Walk',bestFor:'Best for staying outside',why:'West Jefferson has more than 15 downtown murals, making this an easy self-guided public-art walk.',place:'Ashe Arts Center, 303 School Ave, West Jefferson, NC',note:'A natural choice with a dog; use the mural map and wander at your own pace.',dog:'Strong dog option; outdoor walk.'},
      {icon:'🧀',name:'Ashe County Cheese',bestFor:'Best for local flavor',why:'A long-running downtown cheese shop and factory stop closely tied to West Jefferson’s identity.',place:'Ashe County Cheese, 106 E Main St, West Jefferson, NC',note:'Choose this when you want a distinctly local shop rather than another gallery.',dog:'Shop/factory setting; verify pet policy.'}
    ]
  }
};

function choiceMap(place){
  const url='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(place);
  return `<a class="btn" style="display:inline-block;margin-top:8px;text-decoration:none" target="_blank" rel="noopener" href="${url}">Map this stop</a>`;
}

function renderDestinationChoices(key){
  const result=document.getElementById('planResult');
  const set=DESTINATION_PICKS[key];
  if(!result||!set) return;
  const dog=document.getElementById('planDog')?.checked;
  const cards=set.picks.map(p=>`
    <div class="card" style="margin-top:10px">
      <div style="font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:var(--gold)">${p.icon} ${p.bestFor}</div>
      <div class="serif" style="font-size:22px;margin-top:4px">${p.name}</div>
      <div style="margin-top:6px">${p.why}</div>
      <div class="muted" style="font-size:13px;margin-top:7px">${p.note}</div>
      ${dog?`<div style="font-size:13px;margin-top:7px"><b>🐾 Dog note:</b> ${p.dog}</div>`:''}
      ${choiceMap(p.place)}
    </div>`).join('');
  const block=document.createElement('div');
  block.id='destinationChoices';
  block.innerHTML=`
    <div class="card" style="margin-top:14px;border-left:4px solid var(--gold)">
      <div style="font-size:11px;text-transform:uppercase;letter-spacing:.16em;color:var(--gold)">Choose your curiosity</div>
      <div class="serif" style="font-size:26px;margin-top:4px">${set.title}</div>
      <div class="muted" style="margin-top:6px">${set.intro}</div>
    </div>
    ${cards}
    <div class="muted" style="font-size:12px;margin:10px 2px 18px">Carolina Curiosity recommendations are curated from current official/local tourism information and recent visitor signals when available. We have not personally visited every stop. Confirm current hours, closures, admission details, and pet policies before you go.</div>`;
  result.appendChild(block);
}

(function attachChoiceEnhancer(){
  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    const btn=document.getElementById('buildDay');
    if(btn && typeof window.buildDay==='function'){
      clearInterval(timer);
      const original=window.buildDay;
      btn.onclick=()=>{
        original();
        renderDestinationChoices(document.getElementById('planDestination')?.value);
      };
    } else if(tries>50){clearInterval(timer)}
  },100);
})();
