console.log("Js is working");

/*
****************************** SYNTAX ******************************************
    


    ++++++++ CREATING PROMISE

    const promise = new Promise((resolve, reject)=>{    
        //Asynchoronomous operation
        if(operation resolved){
            console.log('Result');
        }else{
            console.log('Error');
        }
    });

    - 'new Promise' : Constructor for creating a promise.
    - 'resolve' : Function to fulfill Promise with value or another Promise.
    - 'reject' : Function to reject Promise with a reason (usually an error).

    +++++++++ USING CREATED PROMISE

    promise
        .then((result)=>{
            //Handle the result of promise
            console.log(result);
        });
        .catch((error)=>{
            //Handle error is promise is rejected
            console.log(error);
        });
        .finally(()=>{
            //Code to be executed regardless of the promise's fate     
        })
        
    - '.then()' : Attach callbacks for promise resolution
    - '.catch()' : Attach callbacks for promise rejection
    - '.finally()' : Attach callbacks for promise settlement(fulfilled or rejected)


*/

/*
// Example 1 with callback

//creating callback
function simplecb(success, cb){
    console.log("sCB function is called");
    if(success){
        cb("Operation successfull", null);
    }else{
        cb(null, "Operation failed");
    }
};

//Usage
simplecb(true, (err, result)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(result);
    }
})



// Example 1 convert to use promise

//creation

const simplePromise = new Promise((resolve, reject)=>{
    const success = true;
    if(success){
        resolve("Promise Operation was successfull");
    }else{
        reject("Promise Operation was failed");
    }
});

// Usage

simplePromise.then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log('It will run eventually');
})


// Example 2 using callback

const isEven = (number, cb)=>{
    if(number % 2===0){
        cb(null, `The number ${number} is even`);
    }else{
        cb(new Error("The number is not even"), null);
    }
};

isEven(4, (err, res)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log(res);
    }
});

isEven(11, (err, res)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log(res);
    }
});

*/

// Example 2 using promise
function isEvenPromise(number){
    console.log('*****************');
    return new Promise((resolve, reject)=>{
        if(number%2===0){
            resolve("The number is even hahahah");
        }else{
            reject(new Error("The number is not even"));
        }
    });
};

isEvenPromise(5)
    .then((result)=>{
    console.log(result);
    })
    .catch((err)=>{
        console.log(err.message);
    })
    .finally(()=>{
        console.log("I'll run anyway so don't worry");
    });