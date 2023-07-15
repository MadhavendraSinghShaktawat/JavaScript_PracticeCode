console.log("hello there!!");

let var1 = "Web Development";
let var2 = "course";
console.log(var1+" "+var2);    // Concatination

let var3 = var1.concat(" ", var2);   // Another way of concatination
console.log(var3);

let var4 = var1.concat("this", var2);   // Another way of concatination
console.log(var4);

let html = `<h1>Heading</h1>"
            "<p>Paragraph</p>`;
// let html = "<h1>Heading</h1>"+
//             "<p>Paragraph</p>";
console.log(html);
console.log(html.substring(1,6));
console.log(html[2]);
console.log(html[1]);
console.log(html[22]);
console.log(html.endsWith("s"));
console.log(html.includes("s"));
console.log(html.indexOf(' '));
console.log(html.charAt(1));
console.log(html.length);
console.log(html.toLocaleLowerCase());
console.log(html.toLocaleUpperCase());
console.log(html.slice(0,4));
console.log(html.split(''));
console.log(html.replace('Heading', "Course"));

let item1 = 'Android'; 
let item2 = 'Ios'; 

let html2 = `Hi I use ${item1} and my friend uses ${item2}`;
let html3 = `<h1>Hi I use ${item1}</h1><h2>I love web development</h2>`
document.body.innerHTML = html3;
console.log(html2); 