// JavaScript Objects

// A javaScript object is an entity having state and behavior (properties and method). 
// For example: car, pen, bike, chair, glass, keyboard, monitor etc.

// JavaScript is an object-based language. Everything is an object in JavaScript.

// JavaScript is template based not class based. Here, we don't create class to get the object. But, we direct create objects.



// There are 3 ways to create objects.

//     By object literal
//     By creating instance of Object directly (using new keyword)
//     By using an object constructor (using new keyword)


// 1) By object literal

person = {
    name: "sandeep" , rollno: 15, depr: "SWE"
}
document.write(person.name + " " + person.rollno + " " + person.depr + "<br>");
document.write(person.name +"<br>");

// 2) By creating instance of Object directly (using new keyword)

var person = new Object();
person.name = "sandeep";
person.rollno = 15;
person.dept = "SWE";
document.write(person.name + " " + person.rollno + " " + person.dept + "<br>");

// 3) By using an object constructor (using new keyword)

function person(name, rollno, dept){
    this.name = name;
    this.rollno = rollno;
    this.dept = dept;
}
var person1 = new person("sandeep", 15, "SWE");

document.write(person1.name + " " + person1.rollno + " " + person1.dept + "<br>");
