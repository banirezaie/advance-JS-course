// use let for for loops!!!
// you must use var in various places as well!!


function foo(){
    var bar= "bar";
    for(let i =0; i<bar.length; i++){
        console.log(bar.charAt(i))
    }
    console.log(i)
}

foo();


function foo(bar){
    if(bar){
        let baz = bar;
        if(baz){
            let bam = baz;
        }
        // console.log(bam)
    }
    // console.log(baz)
}

foo("bar");