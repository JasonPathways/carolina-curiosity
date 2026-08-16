const GUIDE_PICKS={
  little_switzerland:{
    curiosity:{default:'Little Switzerland Books & Beans',dog:'Little Switzerland Books & Beans'},
    lunch:{restaurant:'Switzerland Cafe',dogRestaurant:'Switzerland Cafe',either:'Switzerland Cafe',dogEither:'Switzerland Cafe'}
  },
  asheville:{
    curiosity:{default:'Foundation Woodworks',dog:'River Arts District public-art wander'},
    lunch:{restaurant:'Baby Bull',dogRestaurant:'Ultra Coffeebar',either:'Baby Bull',dogEither:'Ultra Coffeebar'}
  },
  boone:{
    curiosity:{default:'Blowing Rock Art & History Museum',dog:'ArtWalk'},
    lunch:{restaurant:'The Speckled Trout',dogRestaurant:'The Speckled Trout',either:'The Speckled Trout',dogEither:'The Speckled Trout'}
  },
  charlotte:{
    curiosity:{default:'TAOH Outdoor Gallery',dog:'TAOH Outdoor Gallery'},
    lunch:{restaurant:'La Caseta',dogRestaurant:'La Caseta',either:'La Caseta',dogEither:'La Caseta'}
  },
  west_jefferson:{
    curiosity:{default:'Doe Ridge Pottery',dog:'Downtown Mural Walk'},
    lunch:{restaurant:'Havana Cafe',dogRestaurant:'Thong Summit Thai & Sushi',either:'Mount Jefferson picnic',dogEither:'Mount Jefferson picnic'}
  }
};

function cardName(card){return card?.querySelector('.serif')?.textContent?.trim()||''}
function mapHref(place){return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(place)}

function repairPilotContent(key){
  const result=document.getElementById('planResult'); if(!result)return;
  const food=document.getElementById('planFood')?.value||'either';
  const dog=document.getElementById('planDog')?.checked;

  // Asheville: use an open Carrier Park riverfront segment instead of vague/closed riverfront guidance.
  if(key==='asheville'){
    const lunch=document.getElementById('lunchChoices');
    const picnic=[...lunch?.querySelectorAll(':scope > .card')||[]].find(c=>cardName(c)==='French Broad River picnic');
    if(picnic){
      picnic.querySelector('.serif').textContent='Carrier Park picnic';
      const body=[...picnic.children].find(el=>el.tagName==='DIV'&&!el.classList.contains('serif')&&!el.classList.contains('muted')&&!el.textContent.includes('Picnic option'));
      if(body)body.textContent='Pick up something portable and use the open east side of Carrier Park, where the picnic shelter, lawn, parking, and greenway access are currently available.';
      const a=picnic.querySelector('a'); if(a)a.href=mapHref('Carrier Park, 220 Amboy Rd, Asheville, NC');
    }
    [...result.querySelectorAll(':scope > .card')].forEach(c=>{
      if(c.textContent.includes('French Broad River Greenway')||c.textContent.includes('French Broad River stop')){
        const body=[...c.children].find(el=>el.tagName==='DIV'&&!el.classList.contains('row'));
        if(body)body.textContent='Use a currently open riverfront section such as the greenway through Carrier Park. Some Helene-damaged riverfront sections remain closed.';
        const a=c.querySelector('a'); if(a)a.href=mapHref('Carrier Park, 220 Amboy Rd, Asheville, NC');
      }
    });
  }

  // Charlotte: if picnic is selected, keep moving north instead of sending the user back to Freedom Park.
  if(key==='charlotte'){
    const lunch=document.getElementById('lunchChoices');
    const picnic=[...lunch?.querySelectorAll(':scope > .card')||[]].find(c=>cardName(c)==='Freedom Park picnic');
    if(picnic){
      picnic.querySelector('.serif').textContent='Camp North End picnic';
      const body=[...picnic.children].find(el=>el.tagName==='DIV'&&!el.classList.contains('serif')&&!el.classList.contains('muted')&&!el.textContent.includes('Picnic option'));
      if(body)body.textContent='Bring or pick up lunch and eat in Camp North End’s outdoor common areas, keeping the day moving north instead of backtracking to Freedom Park.';
      const a=picnic.querySelector('a'); if(a)a.href=mapHref('Camp North End, 300 Camp Rd, Charlotte, NC');
    }
    if(food==='picnic'){
      const timed=[...result.querySelectorAll(':scope > .card')].find(c=>c.querySelector('.row b')?.textContent?.trim()==='Lunch');
      const body=timed&&[...timed.children].find(el=>el.tagName==='DIV'&&!el.classList.contains('row'));
      if(body)body.textContent='Picnic plan: bring or pick up lunch and use Camp North End’s outdoor common areas before exploring the site.';
    }
  }

  // Little Switzerland: keep the orchard, but make seasonality explicit.
  if(key==='little_switzerland'){
    [...result.querySelectorAll(':scope > .card')].forEach(c=>{
      if(c.querySelector('.row b')?.textContent?.includes('Orchard at Altapass')){
        const body=[...c.children].find(el=>el.tagName==='DIV'&&!el.classList.contains('row'));
        if(body&&!body.textContent.includes('Seasonal'))body.textContent += ' Seasonal stop: the Orchard typically operates May through October; check current hours and access.';
      }
    });
  }

  // Boone/Blowing Rock: clarify that The Blowing Rock is a paid, weather-dependent attraction.
  if(key==='boone'){
    [...result.querySelectorAll(':scope > .card')].forEach(c=>{
      if(c.querySelector('.row b')?.textContent?.trim()==='The Blowing Rock'){
        const body=[...c.children].find(el=>el.tagName==='DIV'&&!el.classList.contains('row'));
        if(body&&!body.textContent.includes('ticketed'))body.textContent += ' This is a ticketed attraction and is weather dependent; check current hours before you go.';
      }
    });
  }

  // West Jefferson: replace the vaguest timed stop with something distinctive and specific.
  if(key==='west_jefferson'){
    const vague=[...result.querySelectorAll(':scope > .card')].find(c=>c.querySelector('.row b')?.textContent?.trim()==='Scenic Ashe County stop');
    if(vague){
      const title=vague.querySelector('.row b');
      const body=[...vague.children].find(el=>el.tagName==='DIV'&&!el.classList.contains('row'));
      const a=vague.querySelector('a');
      if(dog){
        title.textContent='Downtown mural walk';
        if(body)body.textContent='Use West Jefferson’s downtown mural tour for a specific outdoor art stop.';
        if(a)a.href=mapHref('Ashe Arts Center, 303 School Ave, West Jefferson, NC');
      }else{
        title.textContent='St. Mary’s Church of the Frescoes';
        if(body)body.textContent='See the nationally known Ben Long frescoes for a short, distinctive Ashe County art stop.';
        if(a)a.href=mapHref('St. Mary’s Episcopal Church, West Jefferson, NC');
      }
    }
  }
}

function emphasizeChoiceSection(section,recommendedName,label){
  if(!section||!recommendedName)return;
  const cards=[...section.children].filter(el=>el.classList?.contains('card'));
  if(cards.length<2)return;
  const header=cards[0],choices=cards.slice(1);
  const pick=choices.find(c=>cardName(c)===recommendedName)||choices[0];
  if(!pick)return;
  const pickName=cardName(pick);
  const badge=document.createElement('div');
  badge.style.cssText='font-size:11px;text-transform:uppercase;letter-spacing:.14em;color:var(--gold);font-weight:700;margin-bottom:5px';
  badge.textContent='★ Our pick for this day';
  pick.insertBefore(badge,pick.firstChild);
  pick.style.borderLeft='4px solid var(--gold)';
  header.querySelector('.serif') && (header.querySelector('.serif').textContent=label);
  const intro=header.querySelector('.muted');
  if(intro)intro.textContent=`We recommend ${pickName}. Want something different? The other curated choices are still here.`;
  section.insertBefore(pick,header.nextSibling);
  const alternatives=choices.filter(c=>c!==pick);
  if(alternatives.length){
    const details=document.createElement('details'); details.style.marginTop='10px';
    const summary=document.createElement('summary'); summary.className='btn'; summary.style.cssText='cursor:pointer;list-style:none;text-align:center';
    summary.textContent=`See ${alternatives.length} other good choice${alternatives.length===1?'':'s'}`;
    details.appendChild(summary); alternatives.forEach(c=>details.appendChild(c)); section.appendChild(details);
  }
}

function updateTimedLunch(recommendedName){
  if(!recommendedName)return;
  const lunch=[...document.querySelectorAll('#planResult > .card')].find(c=>c.querySelector('.row b')?.textContent?.trim()==='Lunch');
  if(!lunch)return;
  const text=[...lunch.children].find(el=>el.tagName==='DIV'&&!el.classList.contains('row'));
  if(text)text.innerHTML=`<b>Our pick: ${recommendedName}</b><br><span class="muted">Details and alternatives are below.</span>`;
}

function guideRecommendation(){
  const key=document.getElementById('planDestination')?.value;
  const pref=document.getElementById('planFood')?.value||'either';
  const dog=document.getElementById('planDog')?.checked;
  const guide=GUIDE_PICKS[key]; if(!guide)return;
  repairPilotContent(key);

  let lunchName='';
  if(pref==='picnic'){
    const choices=[...document.getElementById('lunchChoices')?.children||[]].filter(el=>el.classList?.contains('card')).slice(1);
    lunchName=cardName(choices[0]);
  }else if(pref==='restaurant') lunchName=dog?guide.lunch.dogRestaurant:guide.lunch.restaurant;
  else lunchName=dog?guide.lunch.dogEither:guide.lunch.either;

  emphasizeChoiceSection(document.getElementById('lunchChoices'),lunchName,'Our lunch recommendation');
  emphasizeChoiceSection(document.getElementById('destinationChoices'),dog?guide.curiosity.dog:guide.curiosity.default,'Our curiosity recommendation');
  updateTimedLunch(lunchName);
}

(function attachGuideLayer(){
  const attach=()=>{
    const btn=document.getElementById('buildDay'); if(!btn)return false;
    btn.addEventListener('click',()=>setTimeout(guideRecommendation,35)); return true;
  };
  if(!attach()){let tries=0;const timer=setInterval(()=>{if(attach()||++tries>50)clearInterval(timer)},100)}
})();
