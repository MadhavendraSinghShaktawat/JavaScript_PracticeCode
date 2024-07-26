console.log('JS is working');

/*
    - 'Explaination'
        |----Modern for async operation.
        |----Based on promises.
        |----'async' for async function.
        |----'await' pause until Promises settles.
        |----Improves code redablity, maintainability
*/

/*
    - 'When To Use'
        |----Async/await for multiple async tasks.
        |----Sequential or completion handling.
        |----Examples: Api calls, file I/O, database operations.
*/

/*
    - 'Best Practices'
        |----Try/Catch for error handling around 'await'.
        |----Avoid 'await' in loops for sequentiality.
        |----'Promise.all' for concurrent 'await'.
        |----'await' inside 'async' functions only.
*/

/*
    - 'Syntax'
        |----'async' Function
                |---async function fnName(){
                        return promise;
                    }

            ----: `async` Identifies function as asynchoronomous.
            ----: `fnName` Name of async function.
*/              


/*
    - 'Syntax'
        |----'await' Function
                |---let result = await fnName();

            ----: `let result` is Variable for storing resolved Promise values.
            ----: `await` Waits for Promise settlement.
            ----: `fnName()` A Promise returning function, eg, API fetch. 
*/



// Simulating a delay

//creating
async function waitAndRun(value){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(value);
        }, 3000);
    });
};

//usage

const getProcessedValueasync = async ()=>{
    const result = await waitAndRun(2);
    console.log(result);
}

getProcessedValueasync(2);


//Fetching multiple values in parallel
const getName = async ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Alice");
        }, 1000);
    })
}

const getAge = async ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(20);
        }, 1000);
    });
};

async function getUserDetails(){
    const results = await Promise.all([getName(), getAge()]);
    console.log(results);
};

getUserDetails();