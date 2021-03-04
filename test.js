console.log("Hello world!")

// console.log(eval("2 + 2"));
// console.log(typeof eval("2 + 2"));

// NEVER EVER DON'T USE EVAL
// Even don't use string time syntax with eval method

console.log("2 + 2");
console.log(eval("2 + 2"));

console.log(new String("2 + 2"));
console.log(eval(new String("2 + 2")));

console.log(eval("2 + 2") === "4");
console.log(eval("2 + 2") === eval("4"));
console.log(eval("2 + 2") === 4);

console.log(eval("2 + 2") === eval(new String("2 + 2")));

var bar = "bar";

function foo(str){
    eval(str);
    console.log(bar)
}

console.log(foo("var bar = 42;"))