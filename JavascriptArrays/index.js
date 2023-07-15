console.log("yep its working")

// -------- Arrays --------
// 2 Syntax to create an array
let arr = [10,12,1,4];
console.log(arr, typeof arr);
let arr1 = new Array(10,12,1,3,2,0);
console.log(arr1, (typeof arr1));
console.log(arr.length)

// 2nd method
let arr2 = ["1st", "2nd", "3rd", "4th"];
console.log(arr2[arr2.length-2]);
console.log(arr2[0]);
// ================================================

// -------- Arrays --------
// 2 syntax to create objects
let user = {
    name: 'Jack',
    age: 19,
    language: 'JavaScript',
};

console.table(user);
console.log(user);

// 2nd method
let users = new Object();
users.name = 'Jack';
users.age = 19;
users.language = 'JavaScript';

console.table(users);
console.log(users);

// ==============================================

// indexOf()
console.log(arr2.indexOf("1st"));
// sort()
arr.sort();
console.log(arr);
// reverse
console.log(arr2.reverse());
// concat()
let alphabets = ['a', 'b', 'c','d','e'];
let numeric = [1,2,3,4,5];
let alphanumeric = alphabets.concat(numeric);
console.log(alphanumeric);
// push()
let city = ['newyork', 'Bhilwara'];
city.push('London');
console.log(city);
// pop() - removes from end of array
city.pop();
console.log(city);

// shift() - removes from beginning of an array
city.shift();
console.log(city);

// unshift()
city.unshift("Kekri");
console.log(city);