console.log("Yep! its working");

// ------------- ===== 1. Single element Selector ===== -------------  // this will only select 1st element in html not all element by id, class or name
// ------------- getElementById() -------------
let x = document.getElementById('demo'); 
x.style.color = 'red';
let x1 = x.className;

console.log(x1)

let z = document.getElementById('test').childNodes;
console.log(z);

// document.getElementById('test').innerText = '<b>Heading</b>'
document.getElementById('test').innerHTML = '<hr><b>Heading</b><hr>'

// ------------- Query Selector Method -------------

let m = document.querySelector('#demo');
x.style.color = 'red';

z = document.querySelector('p');  // it will select only 1st paragraph
z.style.color = 'pink';



// ------------- ===== 2. Multi element selector ===== -------------
// ------------- querySelectorAll() ------------- 
let v = document.querySelectorAll('div');
console.log(v);

// ------------- getElementByTagName() -------------
let art = document.getElementsByTagName('article');
console.log(art);

for (let i = 0; i < art.length; i++){
    art[i].style.color = 'red';
    art[i].style.border = '2px dotted blue';
    console.log('done')
};

// ------------- getElementByClassName() -------------

let n = document.getElementsByClassName('test');
console.log(n);