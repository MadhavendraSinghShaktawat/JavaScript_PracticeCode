console.log("yep! it's working");

// --------- Function Declaration ---------
/*
    Syntax: 
        function name(parameters){
            contntent/body
        };
*/
function disp_name(message){
    console.log(message);
};

disp_name("I'm a displayiong function")
disp_name("I'm a displayiong function")

// --------- Function Expression ---------
/*
    let variable_name = function(parms){
        content/body;
    };
*/
let add = function(a,b){
    return a+b;
};
console.log(add(12,12));   // we have to use this function in console.log because we are returning function

let distance = function(speed, time){
    let dist = speed*time;
    console.log(dist);
};

distance(12, 10);