const WEST_JEFFERSON_PICKS=[
  {
    icon:'📷',
    name:'CatchLight Gallery',
    bestFor:'Best for photography',
    why:'A downtown gallery devoted specifically to fine-art photography by local and regional photographers.',
    place:'CatchLight Gallery, 118 N Jefferson Ave, West Jefferson, NC',
    note:'Good choice when you want a focused art stop rather than general shopping.'
  },
  {
    icon:'🏺',
    name:'Doe Ridge Pottery',
    bestFor:'Best for locally made craft',
    why:'A working pottery studio and gallery with handmade ceramics from multiple High Country artists.',
    place:'Doe Ridge Pottery, 125 Graybeal Ave, West Jefferson, NC',
    note:'Especially strong if you want to bring home something made locally.'
  },
  {
    icon:'🎨',
    name:'Downtown Mural Walk',
    bestFor:'Best for staying outside',
    why:'West Jefferson has more than 15 downtown murals, making this an easy self-guided public-art walk.',
    place:'Ashe Arts Center, 303 School Ave, West Jefferson, NC',
    note:'A natural choice with a dog; pick up or view the mural map and wander at your own pace.'
  },
  {
    icon:'🧀',
    name:'Ashe County Cheese',
    bestFor:'Best for local flavor',
    why:'A long-running downtown cheese shop and factory stop that is closely tied to West Jefferson’s identity.',
    place:'Ashe County Cheese, 106 E Main St, West Jefferson, NC',
    note:'Choose this when you want a distinctly local shop rather than another gallery.'
  }
];

function choiceMap(place){
  const url='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(place);
  return `<a class="btn" style="display:inline-block;margin-top:8px;text-decoration:none" target="_blank" rel="noopener" href="${url}">Map this stop</a>`;
}

function renderWestJeffersonChoices(){
  const result=document.getElementById('planResult');
  if(!result) return;
  const cards=WEST_JEFFERSON_PICKS.map(p=>`
    <div class="card" style="margin-top:10px">
      <div style="font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:var(--gold)">${p.icon} ${p.bestFor}</div>
      <div class="serif" style="font-size:22px;margin-top:4px">${p.name}</div>
      <div style="margin-top:6px">${p.why}</div>
      <div class="muted" style="font-size:13px;margin-top:7px">${p.note}</div>
      ${choiceMap(p.place)}
    </div>`).join('');
  const block=document.createElement('div');
  block.id='westJeffersonChoices';
  block.innerHTML=`
    <div class="card" style="margin-top:14px;border-left:4px solid var(--gold)">
      <div style="font-size:11px;text-transform:uppercase;letter-spacing:.16em;color:var(--gold)">Choose your curiosity</div>
      <div class="serif" style="font-size:26px;margin-top:4px">Pick one specific West Jefferson stop</div>
      <div class="muted" style="margin-top:6px">Four different kinds of stops, so you can choose what fits your mood instead of being told to “find a gallery or shop.”</div>
    </div>
    ${cards}
    <div class="muted" style="font-size:12px;margin:10px 2px 18px">Carolina Curiosity recommendations are curated from current official/local tourism information and recent visitor signals when available. We have not personally visited every stop. Confirm current hours and pet policies before you go.</div>`;
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
        if(document.getElementById('planDestination')?.value==='west_jefferson') renderWestJeffersonChoices();
      };
    } else if(tries>50){
      clearInterval(timer);
    }
  },100);
})();
