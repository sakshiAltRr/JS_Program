function myData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data={name:"Sakshi",age:23};
            resolve(data);
        },1000);
    });
}

myData().then((data)=>{
    console.log("Data",data);
})
.catch((error)=>{
    console.log("Data: ",data);
})