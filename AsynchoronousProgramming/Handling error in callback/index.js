console.log("Js is Working");

// Simple calc with errors
const divideNumbers = (dividen, divisior, callback)=>{
    setTimeout(()=>{
        if(divisior==0){
            callback(new Error('Cannot divide by 0', null))
        }else{
            callback(null, dividen/divisior);
        }
    }, 3000);
};


divideNumbers(10, 2, (error, result)=>{
    if(error){
        console.log('Error', error.message);
        return;
    }else{
        console.log(result);
    };
});

divideNumbers(10, 0, (error, result)=>{
    if(error){
        console.log('Error:', error.message);
        return;
    }else{
        console.log(result);
    };
});