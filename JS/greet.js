
var greet = function (neighbour){
  return 'Hello, ' + neighbour
}
assert.equal(greet('Elmar'), 'Hello, Elmar');


greet('Elmar');
greet('Bob');
greet('Sam');