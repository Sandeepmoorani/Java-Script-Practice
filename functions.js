function hey(){
    // alert('Hey there!');
    document.write('Hey there!');
}
hey(); 


// function with return value 

function add(a,b){
    return a+b;
}
document.write(add(5,6)); 

//JavaScript Function Methods

// apply() 	It is used to call a function contains this value and a single array of arguments.
// bind() 	It is used to create a new function.
// call() 	It is used to call a function contains this value and an argument list.
// toString() 	It returns the result in a form of a string.



// JavaScript Function Object Examples

var add = new Function("a","b","return a+b");
document.writeln(add(5,6));


var pow=new Function("num1","num2","return Math.pow(num1,num2)");  
document.writeln(pow(2,3)); 