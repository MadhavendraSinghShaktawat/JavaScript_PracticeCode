console.log('JS is working');

/*
    - 'Promise.all' : Wait for all promises to resolve
            : takes an iterable of promises.
            : returns a promise that resolves when all input Promises resolve.
            : returns an array of resolved values in same order as input.
            : rejects immediately if any input Promise rejects.

    - 'Promise.race' : Wait for first promise to resolve or reject
            : takes an iterable of Promises.
            : returns a Promise that settles as soon as one input Promise settles.
            : value or reasonfrom first settled input Promise.
*/

/*
        - 'WHEN TO USE'
                |
                |------Promise.all
                |         |---Use for multiple ops dependent on each other.
                |
                |------Promise.race
                |         |---Use for fastest result,eg: timeout, resource fetching
                |
*/

/*
        - 'Promise.all' ********** syntax
            |
            |----Promise.all(iterable)
                    .then(resultArray=>{
                        //handle array of results
                    })
                    .catch(error=>{
                        //handle an error
                    })
*/

//-----Promise.all---------

// creating our promise
const promise1 = Promise.resolve("Promise 1 resolved");
const promise2 = Promise.resolve("Promise 2 resolved");

Promise.all([promise1, promise2]).then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err.message);
})



//-----Promise.race---------

// creating our promise
const promiseRace1 = Promise.resolve("Promise 1 resolved");
const promiseRace2 = Promise.reject(new Error("Error has been occccccc"));

//Promise.race
Promise.race([promiseRace1, promiseRace2]).then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err.message);
})
// Promise.all
Promise.all([promiseRace1, promiseRace2]).then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err.message);
})