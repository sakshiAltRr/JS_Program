// function myDisplayer(some){
//     console.log (some);
// }
// function myFirst(){
//     myDisplayer("Hello");
// }

// function mySecond(){
//     myDisplayer("Welcome");
// }
// mySecond();
// myFirst();
// mySecond();

function mycallback(some){
    console.log(some)
}

function Calculator(a,b,mycallback){
    let result= a+b;
    mycallback(result);
}
Calculator(3,5,mycallback);