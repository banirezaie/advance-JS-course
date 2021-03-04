var foo = "bar";

function bar(){
    var foo = "baz";

    function baz(foo){
        foo = "bam";
        bam= "yay";
    }
    baz();
}

console.log('Hi Helloooo!!!')