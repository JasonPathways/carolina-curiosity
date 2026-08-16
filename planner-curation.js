// Editorial curation layer for the five Plan My Day pilots.
// Surfaces one confident recommendation first, collapses alternatives,
// and corrects route/access guidance where current conditions matter.

const CURATION={
  little_switzerland:{
    lunch:{picnic:'Orchard at Altapass picnic',restaurant:'Switzerland Cafe',either:'Switzerland Cafe'},
    curiosity:{default:'Little Switzerland Books & Beans',dog:'Little Switzerland Books & Beans'}
  },
  asheville:{
    lunch:{picnic:'Carrier Park picnic',restaurant:'Baby Bull',either:'Baby Bull',dogRestaurant:'Ultra Coffeebar',dogEither:'Ultra Coffeebar'},
    curiosity:{default:'Foundation Woodworks',dog:'River Arts District public-art wander'}
  },
  boone:{
    lunch:{picnic:'Bass Lake picnic',restaurant:'The Speckled Trout',either:'The Speckled Trout'},
    curiosity:{default:'Blowing Rock Art & History Museum',dog:'ArtWalk'}
  },
  charlotte:{
    lunch:{picnic:'Camp North End picnic',restaurant:'La Caseta',either:'La Caseta'},
    curiosity:{default:'TAOH Outdoor Gallery',dog:'TAOH Outdoor Gallery'}
  },
  west_jefferson:{
    lunch:{picnic:'Mount Jefferson picnic',restaurant:'Havana Cafe',either:'Mount Jefferson picnic',dogRestaurant:'Thong Summit Thai & Sushi',dogEither:'Mount Jefferson picnic'},
    curiosity:{default:'Doe Ridge Pottery',dog:'Downtown Mural Walk'}
  }
};

function cardName(card){return card?.querySelector('.serif')?.textContent?.trim()||''}
function googleMapHref(place){return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(place)}

function repairCurrentGuidance(key){
  const result=document.getElementById('planResult'); if(!result)return;
  const cards=[...result.querySelectorAll(':scope > .card')];
  const findCard=text=>cards.find(c=>c.textContent.includes(text));

  if(key==='little_switzerland'){
    for(const c of cards){
      if(c.textContent.includes('Orchard at Altapass')){
        const body=[...c.children].find(el=>el.tagName==='DIV' && !el.classList.contains('row'));
        if(body && !body.textContent.includes('seasonal')) body.innerHTML += '<div class="muted" style="font-size:12px;margin-top:6px">Seasonal stop: the Orchard typically operates May through October. Check current hours and access before leaving.</div>';
      }
    }
  }

  if(key==='asheville'){
    for(const c of cards){
      if(c.textContent.includes('French Broad River Greenway')||c.textContent.includes('French Broad River stop')){
        const detail=c.querySelector('.muted')||[...c.querySelectorAll('div')].find(x=>x.textContent.includes('river'));
        if(detail) detail.textContent='Use a currently open riverfront section such as the greenway through Carrier Park. Some Helene-damaged riverfront sections remain closed.';
        const a=c.querySelector('a'); if(a)a.href=googleMapHref('Carrier Park, 220 Amboy Rd, Asheville, NC');
      }
    }
  }

  if(key==='boone'){
    for(const c of cards){
      if(c.textContent.includes('The Blowing Rock')){
        const detail=c.querySelector('.muted')||[...c.querySelectorAll('div')].find(x=>x.textContent.includes('Scenic'));
        if(detail && !detail.textContent.includes('ticketed')) detail.textContent += ' This is a ticketed attraction and is weather dependent; check current hours before you go.';
      }
    }
  }

  if(key==='charlotte'){
    // A picnic after the Rail Trail should continue north instead of backtracking to Freedom Park.
    const lunch=findCard('Lunch');
    if(lunch && document.getElementById('planFood')?.value==='picnic'){
      const div=[...lunch.querySelectorAll('div')].find(x=>x.textContent.includes('Picnic plan:'));
      if(div)div.textContent='Picnic plan: bring or pick up lunch and use Camp North End’s outdoor common areas before exploring the site.';
    }
  }

  if(key==='west_jefferson'){
    const dog=document.getElementById('planDog')?.checked;
    const vague=findCard('Scenic Ashe County stop');
    if(vague){
      const b=vague.querySelector('b'); if(b)b.textContent=dog?'Downtown mural walk':'St. Mary’s Church of the Frescoes';
      const detail=vague.querySelector('.muted')||[...vague.querySelectorAll('div')].find(x=>x.textContent.includes('Choose'));
      if(detail)detail.textContent=dog?'Use West Jefferson’s downtown mural tour for a specific outdoor art stop.':'See the nationally known Ben Long frescoes for a short, distinctive Ashe County art stop.';
      const a=vague.querySelector('a'); if(a)a.href=googleMapHref(dog?'Ashe Arts Center, 303 School Ave, West Jefferson, NC':'St. Mary’s Episcopal Church, West Jefferson, NC');
    }
  }
}

function normalizeSpecialCards(key){
  // Correct two picnic cards whose original generic wording is no longer our preferred route.
  if(key==='asheville'){
    const block=document.getElementById('lunchChoices');
    const card=[...block?.querySelectorAll('.card')||[]].find(c=>cardName(c)==='French Broad River picnic');
    if(card){
      card.querySelector('.serif').textContent='Carrier Park picnic';
      const text=[...card.children].find(el=>el.tagName==='DIV'&&!el.classList.contains('serif')&&!el.textContent.includes('Picnic option')&&!el.classList.contains('muted'));
      if(text)text.textContent='Pick up something portable and use the open east side of Carrier Park, where the picnic shelter, lawn, parking, and greenway access are currently available.';
      const a=card.querySelector('a'); if(a)a.href=googleMapHref('Carrier Park, 220 Amboy Rd, Asheville, NC');
    }
  }
  if(key==='charlotte'){
    const block=document.getElementById('lunchChoices');
    const card=[...block?.querySelectorAll('.card')||[]].find(c=>cardName(c)==='Freedom Park picnic');
    if(card){
      card.querySelector('.serif').textContent='Camp North End picnic';
      const text=[...card.children].find(el=>el.tagName==='DIV'&&!el.classList.contains('serif')&&!el.textContent.includes('Picnic option')&&!el.classList.contains('muted'));
      if(text)text.textContent='Bring or pick up lunch and eat in Camp North End’s outdoor common areas, keeping the day moving north instead of backtracking to Freedom Park.';
      const a=card.querySelector('a'); if(a)a.href=googleMapHref('Camp North End, 300 Camp Rd, Charlotte, NC');
    }
  }
}

function chooseLunchName(key){
  const cfg=CURATION[key]; if(!cfg)return '';
  const pref=document.getElementById('planFood')?.value||'either';
  const dog=document.getElementById('planDog')?.checked;
  if(dog && pref==='restaurant' && cfg.lunch.dogRestaurant)return cfg.lunch.dogRestaurant;
  if(dog && pref==='either' && cfg.lunch.dogEither)return cfg.lunch.dogEither;
  return cfg.lunch[pref]||'';
}

function curateBlock(blockId,pickName,title){
  const block=document.getElementById(blockId); if(!block||!pickName)return;
  const cards=[...block.querySelectorAll(':scope > .card')];
  if(cards.length<2)return;
  const header=cards[0], options=cards.slice(1);
  const picked=options.find(c=>cardName(c)===pickName); if(!picked)return;

  picked.style.borderLeft='4px solid var(--gold)';
  picked.insertAdjacentHTML('afterbegin','<div style="font-size:11px;text-transform:uppercase;letter-spacing:.16em;color:var(--gold);font-weight:700">★ Our pick for this day</div>');
  header.querySelector('.serif') && (header.querySelector('.serif').textContent=title);
  const intro=header.querySelector('.muted'); if(intro)intro.textContent='Start with our recommendation. Open the alternatives only if you want a different kind of stop.';

  block.insertBefore(picked,header.nextSibling);
  const others=options.filter(c=>c!==picked);
  if(others.length){
    const details=document.createElement('details');
    details.style.marginTop='10px';
    const summary=document.createElement('summary');
    summary.className='btn'; summary.style.cursor='pointer'; summary.textContent='See other good choices';
    details.appendChild(summary);
    others.forEach(c=>details.appendChild(c));
    block.appendChild(details);
  }
}

function updateTimedLunch(key,pickName){
  const result=document.getElementById('planResult'); if(!result||!pickName)return;
  const topCards=[...result.querySelectorAll(':scope > .card')];
  const lunch=topCards.find(c=>c.querySelector('b')?.textContent==='Lunch');
  if(!lunch)return;
  const content=[...lunch.children].find(el=>el.tagName==='DIV'&&!el.classList.contains('row'));
  if(content)content.textContent='Our pick: '+pickName+'. See the lunch section below for why we chose it and alternatives.';
}

function applyCuration(){
  const key=document.getElementById('planDestination')?.value;
  const result=document.getElementById('planResult');
  if(!key||!result||!CURATION[key])return;
  normalizeSpecialCards(key);
  repairCurrentGuidance(key);
  const lunchPick=chooseLunchName(key);
  const dog=document.getElementById('planDog')?.checked;
  const curiosityPick=dog?CURATION[key].curiosity.dog:CURATION[key].curiosity.default;
  curateBlock('lunchChoices',lunchPick,'Lunch: our recommendation');
  curateBlock('destinationChoices',curiosityPick,'Curiosity stop: our recommendation');
  updateTimedLunch(key,lunchPick);
}

document.addEventListener('click',e=>{
  if(!e.target.closest?.('#buildDay'))return;
  setTimeout(applyCuration,25);
});
