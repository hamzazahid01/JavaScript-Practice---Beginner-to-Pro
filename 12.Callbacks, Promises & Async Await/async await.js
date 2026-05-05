
function fetchData(dataID){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("data: ", dataID);
            resolve("Fetched.");
        }, 2000);
    })
}

async function wait(){
    let a = await fetchData(1);
    console.log(a);

    let b = await fetchData(2);
    console.log(b);
}

wait();