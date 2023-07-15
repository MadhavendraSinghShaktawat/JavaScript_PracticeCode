console.log("hii there")


// Primitive datatypes (stack)
/*
    1. String
    2. Number
    3. Boolean
    4. Null /object
    5. Undefined
*/
// Reference datatypes (Heap / derived)
/* 
    1. Arrays   // collection of different objects
    2. Object Literals
    3. Functions
    4. Dates
*/

// Strings
let name = "XYZ";
console.log(name);
console.log(typeof name);
console.log("Hey " + name);
// Numbers
let num = 98;
console.log(num);
console.log(typeof num);
console.log("this number = " + num + " is of datatype " + (typeof num));
// Boolean
let state = true;
console.log(state);
console.log(typeof state);
console.log("ur state is "+state);
// Null
let test1 = null;
console.log(test1);
console.log(typeof test1);
// Undefined
let test2 = undefined;
console.log(test2);
console.log(typeof test2);
// Arrays
let arr1 = [10, 20, "Hii", false, name];
console.log(arr1);
console.log("type of "+arr1+" is "+(typeof arr1));
// Collection of objects
let students = {
    jack: 89,
    rohan: 100,
    madhav: 100
};
console.log(students);
console.log(typeof students)
console.table(students);