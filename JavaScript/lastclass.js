console.log("start");
(10 === 10 ?console.log("equals"): console.log("not equal"));

//console.log()() the bove code is looking like this 
//this is function currying

function test(){
    function inner(){
        console.log("inner function");
    }
    return inner;
}

test()();// this is called curying

//closure is a privilage for a inner function to access a outer function
function outer(){
    let count = 0;
    function inner(){
        console.log("inner function");
        count = count+1;
        console.log(count);
    }
    return inner;
}
outer()();
