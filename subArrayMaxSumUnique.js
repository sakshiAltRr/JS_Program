//et arr=[1,3,2,9,5,9,9,8];
// let size=arr.length;
//document.write(size);
// let k=3;

//     function myFunc(){
//     let i=0,j=0;
//     let sum=0, mx=Number.MIN_VALUE;
//     let uniqueElements=new Set();
//     while(j<size ){
//         if(!uniqueElements.has(arr[j])){
//         uniqueElements.add(arr[j])
//         sum += arr[j];

//             j++;
//      mx=Math.max(mx,sum);

//     }
//         else {
//         uniqueElements.delete(arr[i])
//         sum -= arr[i];
//         i++;
//         }
//     }

//     return (mx);
// }
// console.log("the max sum subarray is: "+myFunc())






let arr = [1, 3, 2, 9, 5, 9, 9, 8];

let k = 3;

let start = 0;
let end = 0;
let sum = 0;
let maxSum = 0;
let set = new Set();

while (end < arr.length) {

    while (set.has(arr[end])) {
        sum -= arr[start];
        start++;
    }

    if (end - start + 1 === k) {
        maxSum = Math.max(maxSum, sum)
        sum -= arr[start];
        start++;
    }
    sum = +arr[end]
    set.add(arr[end]);
    end++;

}

console.log(maxSum);