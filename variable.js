var a= 10;
console.log(a);


var a= 10;
var b = 20;
var c = 30;
var d = a+b+c;
console.log(d);

// local variable

function var1(){
    var x= 5;
    console.log(x);
}
var1();

// global variable 

var y = 10;

function abc(){
    console.log(y);
}

function xyz(){
    console.log(y);
}

abc();
xyz();