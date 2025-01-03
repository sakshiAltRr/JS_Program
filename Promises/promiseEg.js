function myDisplayer(some){
    console.log(some);
}

let myPromise=new Promise(function(res,err){
    let x=1;

    if(x==0){
        res("OK");
    }
    else{
        err("Error");
    }
});

myPromise.then(
function(value){
    myDisplayer(value);
},

function(error){
myDisplayer(error);
}
);

const p1=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Hello");
        resolve();
        reject();
    },1000);
}).then(function(){
    console.log("Promise resolved");
},function(){
    console.log("Promise rejected")
}
)