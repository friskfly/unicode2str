var unicode2str = require('../')
var assert = require('assert')
var fs = require('fs')
describe('unicode2str',function(){
  it('should work',function(){
    var inTxt = fs.readFileSync('test/in.txt','utf8')
    var outTxt = fs.readFileSync('test/out.txt','utf8')
    assert.equal(unicode2str(inTxt),outTxt)
  })
})
