var foo;

try {
    foo.length;
}
catch (err) {
    console.log(err); //typeError
}

console.log(err); //ReferenceError 