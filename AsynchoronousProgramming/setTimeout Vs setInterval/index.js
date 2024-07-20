/*
// ---setTimeout---
const showMessage = () =>{
    console.log("This is for setTimeout after 3 seconds")  ========
};                                                               ||
// time is in milliseconds: 3000=3sec                            ||
setTimeout(showMessage, 3000);                                   ||
                                   ===============================               
                                   ||
                                   \/
*/

// same code rewriting in short form
setTimeout(()=>{
    console.log("This is for setTimeout after 3 seconds")
}, 3000);

const timeOutId = setTimeout(()=>{
    console.log("This is for timeOutId after 5 seconds")
}, 5000);

console.log(timeOutId);



const timeOutId2 = setTimeout(()=>{
    console.log("This is for timeOutId after 5 seconds")
}, 5000);
console.log("timeOutId2 is scheduled");
console.log("timeOutId2 is cancelled");
clearInterval(timeOutId2);




// ---setInterval---

/*
let counter = 0;
setInterval(()=>{
    counter++;
    console.log(counter);
}, 2000);
*/


// now if i want to stop counting after 5 then i have to use intervalId method

let counter = 0;

const intervalId = setInterval(()=>{
    counter++;
    console.log(counter);

    if(counter>=5){
        clearInterval(intervalId);
    };

}, 2000);
// console.log(intervalId);