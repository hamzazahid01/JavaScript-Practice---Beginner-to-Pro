// // basic promise
// let promise = new Promise((resolve, reject)=>{
//     let success = true;
//     if(success){
//         resolve("Done!!");
//     }else{
//         reject("Error!!");
//     }
// });
// promise.then((res)=>console.log(res) );
// promise.catch((err)=>console.log(err));

function fetchData(){
    return promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data Fetched");
        },2000)
    });
}

fetchData().then((res)=>{
    console.log(res);
});
