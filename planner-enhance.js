// Race-safe enhancement layer for Plan My Day.
// Uses event delegation so the recommendation/lunch cards render on the very first build,
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
