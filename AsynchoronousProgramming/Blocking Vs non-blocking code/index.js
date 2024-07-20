console.log("Js File is Working");


// ----CREATING A BLOCKING CODE-----
/*
console.log("Starting Blocking Operations");
for(let i=0; i<1e9; i++){
    //simulate some operation
}
console.log("Finishing Blocking Operations");
*/


// ----CREATING A NON-BLOCKING CODE-----

console.log("Starting Non-Blocking Operations");
setTimeout(()=>{
    console.log("Executing delay");
}, 4000);
console.log("Finishing Non-Blocking Operations");  //the setTimeout is not stoping this line to execute first
