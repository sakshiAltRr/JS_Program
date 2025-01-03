function myFunc(some){
    console.log(some);
}

function add(a,b,myFunc){
    let result=a+b;
    
    myFunc(result);
}

add(4,6,myFunc)