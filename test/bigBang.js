
const { expect } = require('chai');
const bigBang = require('../bigBang')

describe('bigBang', function() {
  it("returns N x N array", function(){

    const N = 5;
    const world = bigBang(N);

    expect(Array.isArray(world)).to.be.true;
    expect(world.length).to.equal(N);
    expect(world[0].length).to.equal(N);
  });
  it("contains only 0s and 1s", function(){
    const N = 5;
    const world = bigBang(N);

    world.forEach((row)=>{
      row.forEach((e)=>{
        expect(e).to.be.oneOf([0,1])
      })
    })
  });



});
