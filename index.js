
var esprima = require('esprima')
var str2js = require('str2js')

module.exports = replace

function replace(source) {
  var syntax = esprima.parse(source, {
    tokens: true,
    range: true,
    raw: true
  })

  var collectedDatas = []

  JSON.stringify(syntax, function(key, value) {
  	if (value && value.type && value.type == "Literal" && !value.regex) {
  		if (/\\u[a-z0-9]{4}/.test(value.raw)) {
  			collectedDatas.push({
  				range: value.range,
  				replaceString: "'" + str2js(value.value) + "'"
  			});
  		}
  	}
  	return value;
  })
  if (collectedDatas.length === 0) return source;
  // from the backward forward we can ignore the offset problem
  for (var i = collectedDatas.length - 1; i >= 0; i--) {
    var range = collectedDatas[i].range
    var replaceString = collectedDatas[i].replaceString
    source = source.slice(0, range[0]) + replaceString + source.slice(range[1])
  }
  return source
}
