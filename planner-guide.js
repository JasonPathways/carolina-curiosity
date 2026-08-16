const GUIDE_PICKS={
  little_switzerland:{
    curiosity:{default:'Little Switzerland Books & Beans',dog:'Little Switzerland Books & Beans'},
    lunch:{restaurant:'Switzerland Cafe',dogRestaurant:'Switzerland Cafe',either:'Orchard at Altapass picnic',dogEither:'Orchard at Altapass picnic'}
  },
  asheville:{
    curiosity:{default:'Foundation Woodworks',dog:'River Arts District public-art wander'},
    lunch:{restaurant:'Baby Bull',dogRestaurant:'Ultra Coffeebar',either:'Baby Bull',dogEither:'Ultra Coffeebar'}
  },
  boone:{
    curiosity:{default:'ArtWalk',dog:'Blowing Rock Art & Sculpture Trail'},
    lunch:{restaurant:'The Speckled Trout',dogRestaurant:'The Speckled Trout',either:'The Speckled Trout',dogEither:'The Speckled Trout'}
  },
  charlotte:{
    curiosity:{default:'Goodyear Arts',dog:'TAOH Outdoor Gallery'},
    lunch:{restaurant:'La Caseta',dogRestaurant:'La Caseta',either:'La Caseta',dogEither:'La Caseta'}
  },
  west_jefferson:{
    curiosity:{default:'Doe Ridge Pottery',dog:'Downtown Mural Walk'},
    lunch:{restaurant:'Havana Cafe',dogRestaurant:'Thong Summit Thai & Sushi',either:'Mount Jefferson picnic',dogEither:'Mount Jefferson picnic'}
  }
};

function cardName(card){return card?.querySelector('.serif')?.textContent?.trim()||''}
function emphasizeChoiceSection(section,recommendedName,label){
  if(!section||!recommendedName)return;
  const cards=[...section.children].filter(el=>el.classList?.contains('card'));
  if(cards.length<2)return;
  const header=cards[0];
  const choices=cards.slice(1);
  const pick=choices.find(c=>cardName(c)===recommendedName)||choices[0];
  if(!pick)return;

  const pickName=cardName(pick);
  const badge=document.createElement('div');
  badge.style.cssText='font-size:11px;text-transform:uppercase;letter-spacing:.14em;color:var(--gold);font-weight:700;margin-bottom:5px';
  badge.textContent='★ Our pick for this day';
  pick.insertBefore(badge,pick.firstChild);

  header.querySelector('.serif') && (header.querySelector('.serif').textContent=label);
  const intro=header.querySelector('.muted');
  if(intro)intro.textContent=`We recommend ${pickName}. Want something different? The other curated choices are still here.`;

  // Put the recommendation first, with alternatives tucked away so the page feels planned rather than overwhelming.
  section.insertBefore(pick,header.nextSibling);
  const alternatives=choices.filter(c=>c!==pick);
  if(alternatives.length){
    const details=document.createElement('details');
    details.style.marginTop='10px';
    const summary=document.createElement('summary');
    summary.className='btn';
    summary.style.cssText='cursor:pointer;list-style:none;text-align:center';
    summary.textContent=`See ${alternatives.length} other good choice${alternatives.length===1?'':'s'}`;
    details.appendChild(summary);
    alternatives.forEach(c=>details.appendChild(c));
    section.appendChild(details);
  }
}

function updateTimedLunch(recommendedName){
  if(!recommendedName)return;
  const cards=[...document.querySelectorAll('#planResult > .card')];
  const lunch=cards.find(c=>c.querySelector('.row b')?.textContent?.trim()==='Lunch');
  if(!lunch)return;
  const text=[...lunch.children].find(el=>el.tagName==='DIV'&&!el.classList.contains('row'));
  if(text)text.innerHTML=`<b>Our pick: ${recommendedName}</b><br><span class="muted">Details and alternatives are below.</span>`;
}

function guideRecommendation(){
  const key=document.getElementById('planDestination')?.value;
  const pref=document.getElementById('planFood')?.value||'either';
  const dog=document.getElementById('planDog')?.checked;
  const guide=GUIDE_PICKS[key];
  if(!guide)return;

  let lunchName='';
  if(pref==='picnic'){
    const lunchSection=document.getElementById('lunchChoices');
    const choices=[...lunchSection?.children||[]].filter(el=>el.classList?.contains('card')).slice(1);
    lunchName=cardName(choices[0]);
  }else if(pref==='restaurant'){
    lunchName=dog?guide.lunch.dogRestaurant:guide.lunch.restaurant;
  }else{
    lunchName=dog?guide.lunch.dogEither:guide.lunch.either;
  }

  emphasizeChoiceSection(document.getElementById('lunchChoices'),lunchName,'Our lunch recommendation');
  emphasizeChoiceSection(document.getElementById('destinationChoices'),dog?guide.curiosity.dog:guide.curiosity.default,'Our curiosity recommendation');
  updateTimedLunch(lunchName);
}

(function attachGuideLayer(){
  const attach=()=>{
    const btn=document.getElementById('buildDay');
    if(!btn)return false;
    btn.addEventListener('click',()=>setTimeout(guideRecommendation,30));
    return true;
  };
  if(!attach()){
    let tries=0;const timer=setInterval(()=>{if(attach()||++tries>50)clearInterval(timer)},100);
  }
})();
