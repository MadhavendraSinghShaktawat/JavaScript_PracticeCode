console.log('Js is working');

/*

//--------SYNTAX-----------
firstPromise()
    .then((firstResult)=>{
        //handle the result fo first promise
        //return a value or a new promise
        return secondPromise(firstResult);    
    })
    .then((secondResult)=>{
        //handle the result fo second promise
        //return a value or a new promise
        return thirdPromise(secondResult);    
    })
    .catch((error)=>{
        //handle any error that occured in any of the above promises
        console.log(error);
    })
    .finally(()=>{
        //Execute the code......
    })


*/

// Function returning a function assuming there is no errors in it 

function stepOnePromise(){
    return new Promise((resolve)=>{
        resolve('Step 1 is resolved');
    });
};

function stepTwoPromise(){
    return new Promise((resolve)=>{
        resolve('Step 2 is resolved');
    });
};

function stepThreePromise(){
    return new Promise((resolve)=>{
        resolve('Step 3 is resolved');
    });
};

// Chaining

//first promise
stepOnePromise().then((result)=>{
    console.log(result);
    // 2nd promise
    return new stepTwoPromise();
}).then((result1)=>{
    console.log(result1);
    // 3rd promise
    return new stepThreePromise();
}).then((result2)=>{
    console.log(result2);
}).catch((err)=>{
    console.log(err.message);
}).finally(()=>{
    console.log("I'm VIP I will run even if error is there");
})