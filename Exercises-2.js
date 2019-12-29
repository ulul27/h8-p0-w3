// CARA 1

var input = 'hello world!'
var output = ''

for (var i = input.length - 1; i >= 0; i--) {
  output += '' + input[i]
}
console.log(output)

/*
CARA 2
------

function name(params) {

  var tamp = ''
  for (let i = params.length - 1; i >= 0; i--) {
    tamp += params[i]
  }
  return tamp
}
console.log(name('Hello World!'))

*/