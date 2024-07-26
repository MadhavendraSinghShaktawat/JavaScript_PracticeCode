console.log("JS is working");

// creating a random number generating function
async function randomOutcome(){
    return new Promise((resolve, reject)=>{
        let a = Math.random();
        if(a>0.5){
            resolve("success");
        }else{
            reject(new Error(`${a} is less than 0.5`));
        }
    });
}

const handleOutcomes = async() =>{
    try{
        const result = await randomOutcome();
        console.log(result);
    }catch(err){
        console.log(err.message);
    }
}

handleOutcomes();