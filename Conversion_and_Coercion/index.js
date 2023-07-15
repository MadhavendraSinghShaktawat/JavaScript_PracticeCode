console.log("Hii there")

//          Type Conversion 

let var1 = 100;
var1 = String(var1);
console.log(var1, (typeof var1))

let var2 = true;
var2 = String(var2);
console.log(var2, (typeof var2))

let var3 = new Date;
var3 = String(var3);
console.log(var3, (typeof var3))

let var4 = [10, 20, 30, 40, 50];
var4 = Number(var4);
console.log(var4, (typeof var4))

let var5 = "899.12342";
var5 = parseFloat(var5);
console.log(var5, (typeof var5));
var5 = parseInt(var5);
console.log(var5, (typeof var5));
console.log(var5.toFixed(2), (typeof var5));



//          Type Coercion

let a;
let b;
a = "Hello ";
b = "World ";
console.log(a+b);

a = 10;
b = '10';
console.log(a+b);
console.log(a+parseInt(b));