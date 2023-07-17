console.log("Yep! it's working");
let a = document.querySelector('.container');
console.log(a.childNodes);  // it will count blank spaces also
console.log(a.children);  // it will not count blank spaces also

let nodeName = a.childNodes[1].nodeName;
console.log(nodeName);

// --------- Node Types ---------
let nodeName1 = a.childNodes[1].nodeType;
console.log(nodeName1); // it is giving so it is Element. Refer following list
/*
    if it nodeType returns :
    1 then it is Element
    2 then it is Attribute
    3 then it is Text Node
    8 then it is Comment
    9 then it is Documnet
    10 then it is Doctype
*/

// first child and children heirarchy
let container = document.querySelector('div.container');
console.log(container.children[0].children[0].children);
console.log(container.children[1].children[0]);  // Undefined because we don't have anything inside it
console.log(container.firstChild);  // it will get 1st child from childNodes
console.log(container.firstElementChild);  // it will get 1st element from childNodes or 1st child of children

// last child
console.log(container.lastChild); // it will get 1st child from childNodes
console.log(container.lastElementChild); // it will get 1st element from childNodes or 1st child of children

// childElementCount
console.log(container.childElementCount); // it only works in children. it not works in childNodes

// parentNode
console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.parentElementNode);

// nextSibling
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstChild.nextSibling);