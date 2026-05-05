/*
setTimeout(()=>{
    console.log("This is first step");
},2000);

setTimeout(()=>{
    console.log("This is second step");
},2000);
*/

setTimeout(()=>{
    console.log("I am first step.");
    setTimeout(()=>{
        console.log("I am second step");
        setTimeout(()=>{
            console.log("I am third step");
        },2000);
    },2000);
},2000);