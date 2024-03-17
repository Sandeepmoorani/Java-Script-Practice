var a = "10.20 ";

var num = Number(a );
document.write(num + 10+"<br>");

var num = parseInt(a);
document.write(num + 10+"<br>");

var num = parseFloat(a);
document.write(num + 10+"<br> <br>");

// isFinite
document.write(isFinite(10) + "<br>");
document.write(isFinite("10") + "<br>");
document.write(isFinite("Sandeep") + "<br>");
document.write(isFinite(Infinity) + "<br>");
document.write(isFinite(-Infinity) + "<br>");
document.write(isFinite(10/0) + "<br> <br>");

// isinterger

document.write(Number.isInteger(10) + "<br>");
document.write(Number.isInteger(10.20) + "<br>");
document.write(Number.isInteger("10") + "<br>");
document.write(Number.isInteger(Infinity) + "<br>");
document.write(Number.isInteger(-Infinity) + "<br>");
document.write(Number.isInteger(10/0) + "<br> <br>");

// toFixed
var num = 10.20;
document.write(num.toFixed() + "<br>");
document.write(num.toFixed(2) + "<br>");
document.write(num.toFixed(3) + "<br>");
document.write(num.toFixed(4) + "<br> <br>");    

// toPrecision
var num = 10.20;
document.write(num.toPrecision() + "<br>");
document.write(num.toPrecision(2) + "<br>");
document.write(num.toPrecision(3) + "<br>");
document.write(num.toPrecision(4) + "<br>");


