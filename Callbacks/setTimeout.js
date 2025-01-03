// function myFunction(){
//     console.log("Hello");
// }
// setTimeout(myFunction,3000);

setTimeout(()=>{
    console.log("Hello World");
},2000);

setInterval(myFunction,1000);
function myFunction(){
    let d=new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();
    console.log(h +":"+m+":"+s);
}

    