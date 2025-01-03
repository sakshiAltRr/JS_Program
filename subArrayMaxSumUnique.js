let arr=[1,3,2,9,5,9,9,8];
        let size=arr.length;
        //document.write(size);
        let k=3;

        function myFunc(){
        let i=0,j=0;
        let sum=0, mx=Number.MIN_VALUE;
        while(j<size ){
            sum += arr[j];
            if(j-i+1 < k){
                j++;
        }
            else if(j-i+1 == k){
                
                mx=Math.max(mx,sum);
                sum -= arr[i];
                i++;
                j++;
            }
        }
        return (mx);
    }
    console.log("the max sum subarray is: "+myFunc())