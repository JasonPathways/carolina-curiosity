const DAY_PLANS={
  little_switzerland:{
    label:'Little Switzerland / Tom’s Creek Falls',drive:'~2 hr 10 min from Belmont',
    relaxed:[
      ['9:00 AM','Leave Belmont','Take the mountain route and enjoy the change in scenery.'],
      ['11:15 AM','Tom’s Creek Falls','Easy waterfall walk and Carolina Curiosity mission.','Tom’s Creek Falls, Marion, NC'],
      ['12:45 PM','Lunch','MEAL'],
      ['2:00 PM','Little Switzerland','Browse, stretch your legs, and enjoy the mountain setting.','Little Switzerland, NC'],
      ['3:15 PM','Orchard at Altapass','Explore the orchard, music pavilion, store, and views. Pets are welcome on leash.','Orchard at Altapass, Spruce Pine, NC'],
      ['4:45 PM','Head toward Belmont','Leave room for a scenic pull-off if the day is running ahead.']
    ],
    balanced:[
      ['8:30 AM','Leave Belmont','Start early enough to enjoy the mountain stops without rushing.'],
      ['10:45 AM','Tom’s Creek Falls','Waterfall walk and photo challenge.','Tom’s Creek Falls, Marion, NC'],
      ['12:00 PM','Lunch','MEAL'],
      ['1:15 PM','Little Switzerland','Walk the village area and browse a local shop.','Little Switzerland, NC'],
      ['2:30 PM','Orchard at Altapass','Orchard, Appalachian culture, views, and seasonal activities.','Orchard at Altapass, Spruce Pine, NC'],
      ['4:15 PM','Scenic bonus stop','Choose a nearby overlook or short stop that fits current access.','Blue Ridge Parkway near Little Switzerland, NC'],
      ['5:00 PM','Head toward Belmont','Aim for an easy evening return.']
    ],
    packed:[
      ['8:00 AM','Leave Belmont','Bring water and a flexible mindset for mountain road conditions.'],
      ['10:15 AM','Tom’s Creek Falls','Waterfall walk and mission.','Tom’s Creek Falls, Marion, NC'],
      ['11:30 AM','Little Switzerland','Quick village browse and coffee stop.','Little Switzerland, NC'],
      ['12:30 PM','Lunch','MEAL'],
      ['1:30 PM','Orchard at Altapass','Explore the orchard and Appalachian culture.','Orchard at Altapass, Spruce Pine, NC'],
      ['3:15 PM','Spruce Pine bonus','Walk a few downtown blocks or browse a local shop.','Spruce Pine, NC'],
      ['4:15 PM','Scenic pull-off','Choose one current open overlook on the return route.','Blue Ridge Parkway near Spruce Pine, NC'],
      ['5:00 PM','Head toward Belmont','Return after a full mountain day.']
    ],
    dogNote:'Dog version keeps the outdoor waterfall, village, and Orchard at Altapass stops. Keep your dog leashed and verify current pet rules before entering any business.',
    picnic:'Pack lunch and use a scenic picnic table or the Orchard at Altapass picnic area.',
    restaurant:'Choose one local lunch stop in Little Switzerland or Spruce Pine; the planner keeps restaurant choices intentionally limited so the app stays curated.'
  },
  asheville:{
    label:'Asheville',drive:'~2 hr from Belmont',
    relaxed:[
      ['8:30 AM','Leave Belmont','Aim to arrive before lunch traffic builds.'],
      ['10:45 AM','River Arts District','Walk the district, browse outdoor art, and choose one studio area to explore.','River Arts District, Asheville, NC'],
      ['12:30 PM','Lunch','MEAL'],
      ['2:00 PM','French Broad River Greenway','Take an easy walk along the river.','French Broad River Greenway, Asheville, NC'],
      ['3:30 PM','Downtown Asheville','Choose one block, market, or outdoor people-watching stop rather than trying to cover everything.','Downtown Asheville, NC'],
      ['5:00 PM','Head toward Belmont','Leave before the day becomes a marathon.']
    ],
    balanced:[
      ['8:00 AM','Leave Belmont','Start with enough margin for mountain traffic.'],
      ['10:15 AM','North Carolina Arboretum area','Enjoy gardens/trails or an outdoor walk based on current access.','North Carolina Arboretum, Asheville, NC'],
      ['12:15 PM','Lunch','MEAL'],
      ['1:30 PM','River Arts District','Art, adaptive reuse, and a curiosity stop.','River Arts District, Asheville, NC'],
      ['3:15 PM','Downtown Asheville','Walk a compact downtown loop and choose one independent shop.','Downtown Asheville, NC'],
      ['4:30 PM','French Broad River stop','Short river walk before heading home.','French Broad River Greenway, Asheville, NC'],
      ['5:15 PM','Head toward Belmont','Return after a varied city-and-outdoors day.']
    ],
    packed:[
      ['7:30 AM','Leave Belmont','This version is intentionally full.'],
      ['9:45 AM','North Carolina Arboretum area','Morning outdoor exploration.','North Carolina Arboretum, Asheville, NC'],
      ['11:30 AM','River Arts District','Browse studios and public art.','River Arts District, Asheville, NC'],
      ['12:45 PM','Lunch','MEAL'],
      ['2:00 PM','Downtown Asheville','Compact walking loop with one independent shop or historic stop.','Downtown Asheville, NC'],
      ['3:30 PM','French Broad River Greenway','Easy outdoor reset.','French Broad River Greenway, Asheville, NC'],
      ['4:30 PM','South Slope / outdoor stop','Choose an outdoor-friendly final stop based on the day.','South Slope, Asheville, NC'],
      ['5:30 PM','Head toward Belmont','Expect a later return.']
    ],
    dogNote:'Asheville is especially workable with a dog. The dog version prioritizes greenways, outdoor art, and patios; skip indoor-only attractions unless current pet policies allow access.',
    picnic:'Pick up something portable and picnic near a greenway or outdoor public space.',
    restaurant:'Choose one dog-friendly patio if traveling with a dog, or one local Asheville lunch spot near the day’s route.'
  },
  boone:{
    label:'Boone / Blowing Rock',drive:'~2 hr from Belmont',
    relaxed:[
      ['8:30 AM','Leave Belmont','Head for the High Country.'],
      ['10:45 AM','Bass Lake','Easy loop and a quiet start to the day. Dogs are welcome on leash.','Bass Lake, Blowing Rock, NC'],
      ['12:15 PM','Lunch','MEAL'],
      ['1:30 PM','Downtown Blowing Rock','Walk a few blocks, browse, and enjoy the small-town setting.','Blowing Rock, NC'],
      ['3:00 PM','The Blowing Rock','Scenic views; pets are generally welcome on leash except during special events.','The Blowing Rock, NC'],
      ['4:30 PM','Head toward Belmont','Return before the mountain day gets too long.']
    ],
    balanced:[
      ['8:00 AM','Leave Belmont','Build in time for High Country traffic.'],
      ['10:15 AM','Bass Lake','Easy loop and photo stop.','Bass Lake, Blowing Rock, NC'],
      ['11:30 AM','Downtown Blowing Rock','Shops, town walk, and one curiosity stop.','Blowing Rock, NC'],
      ['12:45 PM','Lunch','MEAL'],
      ['2:00 PM','The Blowing Rock','Scenic attraction and overlook.','The Blowing Rock, NC'],
      ['3:30 PM','Boone','Short downtown/Appalachian State area walk.','Boone, NC'],
      ['5:00 PM','Head toward Belmont','Return after a balanced High Country day.']
    ],
    packed:[
      ['7:30 AM','Leave Belmont','Start early for the fullest version.'],
      ['9:45 AM','Bass Lake','Morning loop.','Bass Lake, Blowing Rock, NC'],
      ['10:45 AM','Downtown Blowing Rock','Quick browse and coffee.','Blowing Rock, NC'],
      ['12:00 PM','The Blowing Rock','Views and short exploration.','The Blowing Rock, NC'],
      ['1:15 PM','Lunch','MEAL'],
      ['2:30 PM','Boone','Downtown exploration and one local shop.','Boone, NC'],
      ['4:00 PM','Scenic bonus','Choose a current open overlook or short trail.','Blue Ridge Parkway near Boone, NC'],
      ['5:15 PM','Head toward Belmont','Expect a later return.']
    ],
    dogNote:'Dog mode favors Bass Lake, outdoor downtown areas, and The Blowing Rock. Keep dogs leashed and substitute outdoor browsing when a shop or attraction is not pet-friendly.',
    picnic:'Picnic near Bass Lake or another public outdoor stop before the afternoon portion of the day.',
    restaurant:'Choose one local Blowing Rock or Boone lunch stop; with a dog, favor a confirmed pet-friendly patio.'
  },
  charlotte:{
    label:'Charlotte',drive:'~30–40 min from Belmont',
    relaxed:[
      ['10:00 AM','Leave Belmont','A later start works well for the city day.'],
      ['10:45 AM','Freedom Park','Walk the lake loop and settle into the day.','Freedom Park, Charlotte, NC'],
      ['12:15 PM','Lunch','MEAL'],
      ['1:45 PM','Rail Trail','Walk a section of the Rail Trail and notice public art.','Charlotte Rail Trail, Charlotte, NC'],
      ['3:15 PM','Camp North End','Explore outdoor public art and adaptive reuse spaces.','Camp North End, Charlotte, NC'],
      ['4:45 PM','Head toward Belmont','Easy return home.']
    ],
    balanced:[
      ['9:30 AM','Leave Belmont','Start with green space before the city gets busier.'],
      ['10:15 AM','Freedom Park','Lake loop and photo challenge.','Freedom Park, Charlotte, NC'],
      ['11:30 AM','South End / Rail Trail','Walk, public art, and one independent stop.','Charlotte Rail Trail, Charlotte, NC'],
      ['12:45 PM','Lunch','MEAL'],
      ['2:00 PM','Camp North End','Outdoor art, adaptive reuse, and local makers.','Camp North End, Charlotte, NC'],
      ['3:45 PM','NoDa','Short mural hunt or neighborhood walk.','NoDa, Charlotte, NC'],
      ['5:00 PM','Head toward Belmont','Return after a varied city day.']
    ],
    packed:[
      ['9:00 AM','Leave Belmont','This version strings together several neighborhoods.'],
      ['9:45 AM','Freedom Park','Quick loop.','Freedom Park, Charlotte, NC'],
      ['11:00 AM','South End / Rail Trail','Public art and neighborhood walk.','Charlotte Rail Trail, Charlotte, NC'],
      ['12:15 PM','Lunch','MEAL'],
      ['1:30 PM','Camp North End','Explore the site and art.','Camp North End, Charlotte, NC'],
      ['3:00 PM','NoDa','Mural hunt and local shop.','NoDa, Charlotte, NC'],
      ['4:15 PM','Historic Fourth Ward','Short architecture walk.','Fourth Ward, Charlotte, NC'],
      ['5:15 PM','Head toward Belmont','Full but still close to home.']
    ],
    dogNote:'Dog mode keeps the day centered on parks, neighborhood walks, murals, and outdoor portions of Camp North End. Use confirmed dog-friendly patios for meals.',
    picnic:'Bring lunch to Freedom Park or another public green space.',
    restaurant:'Choose one local restaurant near South End, NoDa, or Camp North End so food fits the route instead of driving the itinerary.'
  },
  west_jefferson:{
    label:'West Jefferson, NC',drive:'~2 hr from Belmont',
    relaxed:[
      ['8:30 AM','Leave Belmont','Enjoy the gradual climb into Ashe County.'],
      ['10:45 AM','Downtown West Jefferson','Walk the main blocks, find murals, and browse one independent shop.','West Jefferson, NC'],
      ['12:30 PM','Lunch','MEAL'],
      ['2:00 PM','Mount Jefferson State Natural Area','Drive to the mountain and choose an overlook, picnic area, or short hike. Pets are allowed on a leash up to 6 feet.','Mount Jefferson State Natural Area, NC'],
      ['4:00 PM','Downtown bonus','Return for coffee, art, or a final browse if you still have energy.','West Jefferson, NC'],
      ['4:45 PM','Head toward Belmont','Easy mountain return.']
    ],
    balanced:[
      ['8:00 AM','Leave Belmont','Start early enough for both town and mountain time.'],
      ['10:15 AM','Mount Jefferson State Natural Area','Begin with overlooks and a short trail. Pets are allowed on leash.','Mount Jefferson State Natural Area, NC'],
      ['12:00 PM','Lunch','MEAL'],
      ['1:15 PM','Downtown West Jefferson','Murals, local shops, and a curiosity walk.','West Jefferson, NC'],
      ['3:15 PM','Scenic Ashe County stop','Choose a nearby scenic pull-off or outdoor stop based on current access.','Ashe County, NC'],
      ['4:30 PM','Final downtown stop','Coffee, gallery, or local product stop.','West Jefferson, NC'],
      ['5:00 PM','Head toward Belmont','Return after a balanced small-town day.']
    ],
    packed:[
      ['7:30 AM','Leave Belmont','This is the fullest West Jefferson version.'],
      ['9:45 AM','Mount Jefferson State Natural Area','Overlooks and a short hike.','Mount Jefferson State Natural Area, NC'],
      ['11:30 AM','Downtown West Jefferson','Mural hunt and local shopping.','West Jefferson, NC'],
      ['12:45 PM','Lunch','MEAL'],
      ['2:00 PM','Ashe County scenic drive','Take a short scenic loop rather than adding another major attraction.','Ashe County, NC'],
      ['3:15 PM','Downtown art / local stop','Choose a gallery, shop, or outdoor public art stop.','West Jefferson, NC'],
      ['4:15 PM','Picnic / overlook reset','One last outdoor pause before the drive home.','Mount Jefferson State Natural Area, NC'],
      ['5:00 PM','Head toward Belmont','Expect a later return.']
    ],
    dogNote:'West Jefferson works especially well with a dog. Mount Jefferson allows pets on an attended leash no longer than 6 feet; the town portion stays outdoors when a shop does not allow pets.',
    picnic:'Picnic at Mount Jefferson State Natural Area, which has picnic facilities and mountain views.',
    restaurant:'Choose one local downtown West Jefferson restaurant; with a dog, use a currently confirmed pet-friendly patio or switch to the picnic plan.'
  }
};

function plannerMeal(plan,food,dog){
  if(food==='picnic') return 'Picnic plan: '+plan.picnic;
  if(food==='restaurant') return 'Local restaurant plan: '+plan.restaurant;
  return 'Choose based on the day: '+plan.picnic+' Or, '+plan.restaurant.charAt(0).toLowerCase()+plan.restaurant.slice(1);
}
function mapButton(place){
  if(!place) return '';
  const url='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(place);
  return `<a class="btn" style="display:inline-block;margin-top:8px;text-decoration:none" target="_blank" rel="noopener" href="${url}">Map this stop</a>`;
}
function buildDay(){
  const key=get('planDestination').value,pace=get('planPace').value,food=get('planFood').value,dog=get('planDog').checked;
  const plan=DAY_PLANS[key],steps=plan[pace].map(x=>[...x]);
  steps.forEach(step=>{if(step[2]==='MEAL')step[2]=plannerMeal(plan,food,dog)});
  const dogBanner=dog?`<div class="card" style="border-left:4px solid var(--gold);margin-bottom:12px"><b>🐾 Dog version</b><div style="margin-top:6px">${plan.dogNote}</div></div>`:'';
  get('planResult').innerHTML=`
    <div class="card" style="margin-top:14px"><div style="font-size:11px;text-transform:uppercase;letter-spacing:.16em;color:var(--gold)">Your Carolina Curiosity day</div><div class="serif" style="font-size:30px;margin-top:4px">${plan.label}</div><div class="muted" style="margin-top:4px">${plan.drive} · ${pace==='relaxed'?'Relaxed':pace==='balanced'?'Balanced':'Pack it in'} pace</div></div>
    ${dogBanner}
    ${steps.map(s=>`<div class="card" style="margin-top:10px"><div class="row"><b>${s[0]}</b><span class="muted">${s[1]}</span></div><div style="margin-top:6px">${s[2]}</div>${mapButton(s[3])}</div>`).join('')}
    <div class="card" style="margin-top:10px;font-size:13px"><b>Before you go</b><div style="margin-top:6px">Hours, access, road conditions, pet policies, and seasonal operations can change. Check official information for the day’s stops before leaving Belmont.</div></div>`;
  get('planResult').scrollIntoView({behavior:'smooth',block:'start'});
}

get('openPlanner').onclick=()=>show('planner');
get('buildDay').onclick=buildDay;
