
function bigBang(N) {
  let world = []

  for (let i = 0; i <N; i++) {
    let row = []
    for (let j = 0; j < N; j++) {
      row.push(~~(Math.random()*2))
    }
    world.push(row)
  }
  return world
}


module.exports = bigBang;
