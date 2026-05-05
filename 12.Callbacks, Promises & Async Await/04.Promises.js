// basic promise
let promise = new Promise((resolve, reject)=>{
    let success = true;
    if(success){
        resolve("Done!!");
    }else{
        reject("Error!!");
    }
});
promise.then(()=>console.log("Success") );
promise.catch(()=>console.log("Error"));