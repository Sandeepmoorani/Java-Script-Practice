function hey(){
    // alert('Hey there!');
    // document.write('Hey there!');
}
hey(); 


// function with return value 

function add(a,b){
    return a+b;
}
// document.write(add(5,6)); 

//JavaScript Function Methods

// apply() 	It is used to call a function contains this value and a single array of arguments.
// bind() 	It is used to create a new function.
// call() 	It is used to call a function contains this value and an argument list.
// toString() 	It returns the result in a form of a string.



// apply() method
var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  var person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  document.write(person.fullName.apply(person1)); 

  // bind() method
  var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  var person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  var myName = person.fullName.bind(person1); 
  document.write(myName()); 

  // call() method
  var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  var person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  document.write(person.fullName.call(person1)); 

  // toString() method
  var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  var person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  document.write(person.fullName.toString()); 

  // JavaScript Function Properties

  // constructor 	It returns the function that created the Function object's prototype.
  // length 	It returns the number of arguments expected by the function.
  // name 	It returns the name of the function.

  // constructor property
  function add(a,b){
    return a+b;
}



// JavaScript Function Object Examples

var add = new Function("a","b","return a+b");
document.writeln(add(5,6));


var pow=new Function("num1","num2","return Math.pow(num1,num2)");  
document.writeln(pow(2,3)); 