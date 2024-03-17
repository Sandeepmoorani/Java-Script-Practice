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

// person = {
//     name: "sandeep" , rollno: 15, depr: "SWE"
// }
// document.write(person.name + " " + person.rollno + " " + person.depr + "<br>");
// document.write(person.name +"<br>");

// 2) By creating instance of Object directly (using new keyword)

// var person = new Object();
// person.name = "sandeep";
// person.rollno = 15;
// person.dept = "SWE";
// document.write(person.name + " " + person.rollno + " " + person.dept + "<br>");

// 3) By using an object constructor (using new keyword)

// function person(name, rollno, dept){
//     this.name = name;
//     this.rollno = rollno;
//     this.dept = dept;
// }
// var person1 = new person("sandeep", 15, "SWE");

// document.write(person1.name + " " + person1.rollno + " " + person1.dept + "<br>");

// forin loop

var person = {name: "sandeep", rollno: 15, dept: "SWE"};

for(var x in person){
    document.write(person[x] + " <br>");
}

var num = [1,2,3,4,5];

for(var x in num){
    document.write(num[x] + " "+ "<br>");
}


// JavaScript Object Properties

// The name:values pairs in JavaScript objects are called properties.

// Property values are string, but the properties can be accessed by key (string).

// Example
// person.name;
// person["name"];

// Example

var person = {name: "sandeep", rollno: 15, dept: "SWE"};
document.write(person.name + " " + person.rollno + " " + person.dept + "<br>");
document.write(person["name"] + " " + person["rollno"] + " " + person["dept"] + "<br>");

// JavaScript Object Methods

// Objects can also have methods.

// Methods are actions that can be performed on objects.

// Methods are stored in properties as function definitions.

// Example

var person = {
    name: "sandeep",
    rollno: 15,
    dept: "SWE",
    fullname: function(){
        return this.name + " " + this.rollno;
    }
}
document.write(person.fullname() + "<br>");

// JavaScript Object Accessors

// You can define getters and setters on any predefined object types, including functions.

// Example

// var person = {
//     name: "sandeep",
//     rollno: 15,
//     dept: "SWE",
//     get fullname(){
//         return this.name + " " + this.rollno;
//     }
// }
// document.write(person.fullname + "<br>");

// JavaScript Object Constructors

// The examples from the previous chapters are limited. They only create single objects.

// Sometimes we need a "blueprint" for creating many objects of the same "type".

// The way to create an "object type", is to use an object constructor function.

// In the example above, function person() is an object constructor function.

// Objects of the same type are created by calling the constructor function with the new keyword:

// Example

// function person(name, rollno, dept){
//     this.name = name;
//     this.rollno = rollno;
//     this.dept = dept;
// }
// var person1 = new person("sandeep", 15, "SWE");
// var person2 = new person("sandeep", 15, "SWE");
// document.write(person1.name + " " + person1.rollno + " " + person1.dept + "<br>");
// document.write(person2.name + " " + person2.rollno + " " + person2.dept + "<br>");

// JavaScript Object Prototypes

// All JavaScript objects inherit properties and methods from a prototype.

// Date objects inherit from Date.prototype. Array objects inherit from Array.prototype. Person objects inherit from Person.prototype.

// The Object.prototype is on the top of the prototype inheritance chain:

// Date objects, Array objects, and Person objects inherit from Object.prototype.

// Example

// function person(name, rollno, dept){
//     this.name = name;
//     this.rollno = rollno;
//     this.dept = dept;
// }
// person.prototype.age = 20;
// var person1 = new person("sandeep", 15, "SWE");
// document.write(person1.age + "<br>");



