//DOM in JS

//DOM is a programming interface for HTML and XML documents. 
// It represents the page so that programs can change the document structure, style, and content. 
// The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.


// how to target elements in the DOM

// 1. getElementById
// 2. getElementsByClassName
// 3. getElementsByTagName
// 4. querySelector


var element;
// element = document;
// element = document.head;
// element = document.body;
// element = document.title;
// element = document.links;
// console.log(element);

// 1. getElementById

element = document.getElementById('hi');
console.log(element);

// 2. getElementsByClassName

element = document.getElementsByClassName('hello')[1];
// console.log(element);

// 3. getElementsByTagName

element = document.getElementsByTagName('p');
console.log(element);