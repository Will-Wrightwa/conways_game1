const show = require('./show');
function game(world,n=1) {
  let out =  world.map((row,i)=>{
      return row.map((e,j)=>{
        return isOk(i,j,world);
      })
    })
    console.log(show(out),'\n');
  if(n===1)return out;
  return game(out,n-1);
}


function neighbors(row,col,world) {
  let out = 0;
  for(let i = row-1; i<= row+1; i++){
    for(let j = col-1; j<=col+1;j++){
      out += world[i] && world[i][j] || 0;
    }
  }
  return out //- world[row][col];
}

function isOk(row,col,world) {
  let n = neighbors(row,col,world)
  return ~~(n === 4 && world[row][col]) ||
  ~~(n === 3) || 0;
}

let a = [[1,1,1],
         [0,0,0],
         [1,0,0]];


// console.log(game(a,2))


module.exports = game;
