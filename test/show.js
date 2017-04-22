
const { expect } = require('chai');
const show = require('../show')
const bigBang = require('../bigBang')

describe("show", function(){
  it("returns a string", function(){
    let world  = bigBang(10);
    expect(show(world)).to.be.a("string");
  });

});
