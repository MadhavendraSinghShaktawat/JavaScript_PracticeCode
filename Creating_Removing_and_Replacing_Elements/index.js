console.log("Yep! it's working");


// -------- Create Element --------
let elem = document.createElement('a');
elem.className = 'jsClass';
elem.id = 'jsId';
elem.setAttribute('target', '_blank');
elem.setAttribute('href', '//madhavendrasingh.epizy.com');
elem.innerHTML = "<b>Hii there</b>";
let div = document.querySelector('div.container');
div.appendChild(elem);
console.log(elem);

// getAttribute() --> gets the data from the attribute
var h = document.getElementById('myAnchor').getAttribute('href');
console.log(h);

// hasAttribute()   --> it will give boolean. If it has attribut then true else false
var r = document.getElementById('myAnchor').hasAttribute('href');
console.log(r);

// removeAttribute()   --> it will remove the existing attribute
var r = document.getElementById('myAnchor').removeAttribute('href');

// replaceWith() --> it will replace content
let elem1 = document.getElementById('myid');
let elem2 = document.createElement('div');
let content = document.createTextNode("lorem sdf");
elem2.appendChild(content);
console.log(elem2);
console.log(elem1);

elem1.replaceWith(elem2);
console.log(elem2);


// removeChild() --> it will remove a child
let list = document.getElementById('myul');
console.log(list);

if (list.hasChildNodes()){
    list.removeChild(list.childNodes[0]);  
};
console.log(list);