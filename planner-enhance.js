// Race-safe enhancement layer for Plan My Day.
// Uses event delegation so recommendation/lunch cards render on the very first build,
// regardless of whether planner.js or planner-choices.js finished attaching first.
document.addEventListener('click',e=>{
  const btn=e.target.closest?.('#buildDay');
  if(!btn)return;
  setTimeout(()=>{
    const key=document.getElementById('planDestination')?.value;
    const result=document.getElementById('planResult');
    if(!key||!result||!result.innerHTML.trim())return;
    document.getElementById('lunchChoices')?.remove();
    document.getElementById('destinationChoices')?.remove();
    if(typeof renderLunchChoices==='function')renderLunchChoices(key);
    if(typeof renderDestinationChoices==='function')renderDestinationChoices(key);
  },0);
});

// Load the editorial curation layer after the planner UI exists.
if(!document.querySelector('script[data-planner-curation]')){
  const s=document.createElement('script');
  s.src='./planner-curation.js';
  s.dataset.plannerCuration='true';
  document.body.appendChild(s);
}
