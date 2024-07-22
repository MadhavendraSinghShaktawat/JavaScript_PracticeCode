console.log("Js is working");

// Behaving as a normal function parameter/argument/variable

// Creating callback function
function myCallbackFn(){
    console.log("My Callback function");
}

// usage
function logMessage(callback){
    // execute the callbackFn
    callback(); 
}

// call HOF{Higher Order Function}
logMessage(myCallbackFn);



// In More simplified manner *********************
function logMessage2(callback){
    callback();
}
logMessage2(function(){
    console.log("My Callback function in simplyfied version")
})




// **************************************

// Returning a callback function method 1
function logMessage3(callback){
    let a = callback();
    // console.log(a);         //*********|----both give same result
    console.log(callback());  //**********| 
;}
logMessage3(()=>{
    return 'I there it is returning method 1';
});



// Returning a callback function method 1
function logMessage4(callback){
    let result = callback();
    return result;
;}
let rlt =logMessage4(()=>{
    return 'I there it is returning method 2';
}); 
console.log(rlt);


// passing parameters to callback function
const logMessageHOF = (callback)=>{
    const b = callback("Madhavendra Singh", "Shaktawat");
    console.log(b);
};
const logMessageCallbackFn = (fname, lname)=>{
    return `Hi, ${fname} ${lname}.`;
}

logMessageHOF(logMessageCallbackFn);

// HOF with parameter and call back function
const sumHOF = (a, b, callback)=>{
    const result = a+b;
    callback(result);
};
sumHOF(10,2, (result)=>{
    console.log(result);
})