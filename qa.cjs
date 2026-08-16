const http=require('http');
const fs=require('fs');
const path=require('path');
const {JSDOM,VirtualConsole}=require('jsdom');

const root=__dirname;
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.webmanifest':'application/manifest+json','.svg':'image/svg+xml'};
const server=http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split('?')[0]);
  if(p==='/'||p==='') p='/index.html';
  const file=path.join(root,p.replace(/^\//,''));
  if(!file.startsWith(root)||!fs.existsSync(file)){res.writeHead(404);return res.end('not found');}
  res.writeHead(200,{'Content-Type':types[path.extname(file)]||'text/plain'});fs.createReadStream(file).pipe(res);
});

function assert(cond,msg){if(!cond)throw new Error(msg)}
const wait=ms=>new Promise(r=>setTimeout(r,ms));
async function waitFor(fn,timeout=6000){const start=Date.now();while(Date.now()-start<timeout){try{if(fn())return}catch{}await wait(50)}throw new Error('Timed out waiting for app readiness')}

(async()=>{
  await new Promise(r=>server.listen(8123,'127.0.0.1',r));
  const errors=[];
  const virtualConsole=new VirtualConsole();
  virtualConsole.on('jsdomError',e=>{if(!String(e.message).includes('navigation'))errors.push(String(e.message||e))});
  virtualConsole.on('error',e=>errors.push(String(e)));
  const dom=await JSDOM.fromURL('http://127.0.0.1:8123/',{
    runScripts:'dangerously',resources:'usable',pretendToBeVisual:true,virtualConsole,
    beforeParse(window){
      window.HTMLElement.prototype.scrollIntoView=function(){};
      window.HTMLElement.prototype.focus=function(){};
      window.open=function(url){window.__lastOpened=url;return null};
      Object.defineProperty(window,'devicePixelRatio',{value:1,configurable:true});
      window.HTMLCanvasElement.prototype.getContext=function(){return {scale(){},fillRect(){},fillText(){},beginPath(){},arc(){},fill(){},set fillStyle(v){},set textAlign(v){},set font(v){},set globalCompositeOperation(v){}}};
      Object.defineProperty(window.navigator,'serviceWorker',{value:{register:()=>Promise.resolve({})},configurable:true});
    }
  });
  const w=dom.window,d=w.document;
  await waitFor(()=>d.querySelectorAll('#list .item').length>0 && d.getElementById('buildDay') && typeof w.buildDay==='function');
  const results=[];
  const pass=(name)=>results.push('PASS  '+name);

  // 1 Search, including hidden-category reset
  const waterfall=d.querySelector('.cat[data-cat="waterfalls"]'); waterfall.click();
  const search=d.getElementById('search'); search.value='Belmont Abbey'; search.dispatchEvent(new w.Event('input',{bubbles:true}));
  assert(w.state?.cat==='all' || d.getElementById('count').textContent!=='0 options','Search did not clear category restriction');
  assert(d.getElementById('drive').value==='999','Search did not reset drive to all adventures');
  assert(d.querySelectorAll('#list .item').length>=1,'Search returned no Belmont Abbey result');
  pass('Search works and clears hidden category/favorites distance restrictions');
  search.value=''; search.dispatchEvent(new w.Event('input',{bubbles:true}));

  // 2 All five planner destinations x 3 pace x 3 food x dog yes/no = 90 builds
  const destinations=['little_switzerland','asheville','boone','charlotte','west_jefferson'];
  const paces=['relaxed','balanced','packed'];
  const foods=['picnic','restaurant','either'];
  let builds=0;
  for(const dest of destinations)for(const pace of paces)for(const food of foods)for(const dog of [false,true]){
    d.getElementById('planDestination').value=dest;
    d.getElementById('planPace').value=pace;
    d.getElementById('planFood').value=food;
    d.getElementById('planDog').checked=dog;
    d.getElementById('buildDay').click();
    const html=d.getElementById('planResult').innerHTML;
    assert(html.length>300,`Empty plan for ${dest}/${pace}/${food}/${dog}`);
    assert(!html.includes('>MEAL<')&&!html.includes('MEAL'),`Unresolved MEAL placeholder for ${dest}/${pace}/${food}/${dog}`);
    assert(d.getElementById('destinationChoices'),`Missing specific stop choices for ${dest}`);
    if(food==='picnic') assert(html.includes('Picnic option'),`Missing picnic option for ${dest}`);
    if(food==='restaurant') assert(!html.includes('Picnic option'),`Picnic choices shown in restaurant-only mode for ${dest}`);
    if(food==='either') assert(html.includes('Picnic option')&&html.includes('🍽️'),`Either mode missing food choices for ${dest}`);
    if(dog) assert(html.includes('Dog note')||html.includes('Dog version'),`Dog guidance missing for ${dest}`);
    builds++;
  }
  assert(builds===90,'Planner combination count mismatch');
  pass('All 90 Plan My Day destination/pace/food/dog combinations build');

  // 3 Map links
  d.getElementById('planDestination').value='west_jefferson';d.getElementById('planFood').value='either';d.getElementById('planDog').checked=true;d.getElementById('buildDay').click();
  const maps=[...d.querySelectorAll('#planResult a')].filter(a=>a.textContent.includes('Map this stop'));
  assert(maps.length>=5,'Too few map links on a full plan');
  for(const a of maps)assert(a.href.startsWith('https://www.google.com/maps/search/'),'Invalid map URL: '+a.href);
  pass('Map-this-stop links are generated with valid Google Maps search URLs');

  // 4 Back/navigation
  d.getElementById('openPlanner').click(); assert(d.getElementById('planner').classList.contains('active'),'Planner did not open');
  w.show('discover'); assert(d.getElementById('discover').classList.contains('active'),'Discover did not restore');
  pass('Planner/Discover navigation works');

  // 5 Favorites/completed/rating/passport regression
  w.choose(1); w.renderDetails(); w.show('details');
  d.getElementById('favorite').click(); assert(w.state.favorites.has(1),'Favorite did not save');
  d.getElementById('complete').click(); assert(w.state.completed.has(1),'Complete did not save');
  w.renderStars(); const star4=d.querySelector('[data-star="4"]'); assert(star4,'Rating stars missing'); star4.click(); assert(w.state.ratings.get(1)===4,'4-star rating did not save');
  w.show('saved'); assert(d.querySelectorAll('#savedList .savedPick').length>=1,'Saved screen missing favorite');
  w.show('passport'); assert(d.getElementById('doneNum').textContent==='1','Passport progress did not update');
  assert(w.localStorage.getItem('cc_favorites')&&w.localStorage.getItem('cc_completed')&&w.localStorage.getItem('cc_ratings'),'Persistence keys not written');
  pass('Favorites, completion, rating, Saved and Passport still work');

  // 6 Basic DOM integrity/no duplicate planner result sections
  w.show('planner'); d.getElementById('buildDay').click(); d.getElementById('buildDay').click();
  assert(d.querySelectorAll('#planResult #destinationChoices').length===1,'Duplicate destination choice blocks after rebuild');
  assert(d.querySelectorAll('#planResult #lunchChoices').length<=1,'Duplicate lunch choice blocks after rebuild');
  pass('Repeated itinerary builds do not accumulate duplicate choice blocks');

  // 7 JS errors
  await wait(100);
  if(errors.length) throw new Error('JavaScript/runtime errors: '+errors.join(' | '));
  pass('No JavaScript runtime errors captured by QA browser');

  console.log(results.join('\n'));
  console.log(`PASS  ${builds} planner builds tested total`);
  server.close();dom.window.close();
})().catch(e=>{console.error('FAIL',e.stack||e);server.close();process.exit(1)});
