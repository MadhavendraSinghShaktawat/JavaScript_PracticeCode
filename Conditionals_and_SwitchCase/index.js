console.log("Yep Its Working");

// ---------- Conditionals ----------
/* 
if statement: 
    Syntax: if(condition){Body};
*/
// a===b means that a has same value and same type as b
let a = 12;
let b = '12';
if (a==12){
    console.log("yes");
}


/*
    if else statement
        Syntax: if(cond){body}
        else{body};
*/
if (a===b){
    console.log("yes");
}else{
    console.log('false')
}


/*
    else if condition
        syntax: if(cond){body}
        else if{cond.}{body}
        else {body};
*/
let salary = 1200000;
if(salary == 100000){
    console.log("......");
} else if (salary < 100000000000){
    console.log("=====");
}else{
    console.log("afsdknj");
}


/* 
    Ternary: condition? if true: if false
*/
let age = 19;
let value = age>=18?console.log("eligible"):console.log("not eligible");



// ---------- Switch Case ----------
switch (age){
    case 18:
        console.log("ws");
        break;
    case 28:
        console.log("dsad");
        break;
    case 19:
        console.log(19);
        break;

    default:
        console.log('default');
        break;
}