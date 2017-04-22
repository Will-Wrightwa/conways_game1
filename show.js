
function show(world,life='☘',empty='_') {
  return world.map(row=>{
    return row.map(e=>e ? life : empty).join(' ');
  }).join('\n');
}

module.exports = show;
