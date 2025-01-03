function removeNeg(numbers,callback){
    const myArr=[];
    for(let x of numbers){
        if(callback(x)){
            myArr.push(x);
        }
    }
    return myArr;
}

const myNumbers=[4, 1, -20, -7, 5, 9, -6];
const posNumbers=removeNeg(myNumbers,(x)=>{return x >= 0});
console.log(posNumbers);