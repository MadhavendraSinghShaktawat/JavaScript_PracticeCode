console.log("yep this is working");
console.log("yep this is working");

var course = "Cse";
var city = "Bhilwara";
var cityPincode = 311001;

console.log(course, city, cityPincode);
 
course = "xyz";
console.log(course, city, cityPincode);

// Most widely used variable cases
/*
    camelCase
    PascalCase
    snake_case
    kebab-case
*/

const marks = 97;
console.log(marks);
// marks = 10;  // we cant change const variable so this line of code will show error


// LET

let name = "Madhav";
console.log(name);//this will show line on name because it is a block level element. to use this
                    //code we have to put let and console.log in "{}" 

{                               //    -------
                                //         |
let name = 'Madhavendra';      //         |-------|Block level element and it is in local variable
console.log(name);             //         |   
}                               //    -------

// console.log(names);


const arr = [10,12,14,16,18,20];
arr.push(30);
console.log(arr);