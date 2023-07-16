console.log("Yep! it's working");

// ---------------- Types of loops ---------------- 
/*
    1. for
    2. forin
    3. foreach
    4. while
    5. Dowhile
*/

let array = [1,4,4,4,0];
let element = null;
let sum = 0;

// For loop
for (let index = 0; index < array.length; index++) {
    element = array[index];
}
console.log(element);

// forin loop
for(var i in array){
    console.log(i + "=" + array[i]);
}

// foreach
array.forEach(element => {
    sum += element
})
console.log("Sum = "+sum);

// while loop
let n = 0;
let m = 10;
while(n<=m){
    console.log(n);
    n++;
}

// do while loop
let n1 = 0;
let m1 = 10;
do{
    console.log(n1);
    n1++;
}while(n1<=m1);