var foo = "bar";



function bar() {
  var foo = "baz";
}

function baz(foo) {
  foo = "bam";
  bam = "yay";
}

console.log(foo)
console.log("scope is here")


// LHS => left hand side => target
// RHS => right hand side => value