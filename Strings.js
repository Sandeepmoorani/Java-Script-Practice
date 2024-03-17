var str = "hay this is Sandeep moorani";
document.write(str + "<br>");

// length
document.write(str.length + "<br>");

// toLowerCase toUpperCase

document.write(str.toLowerCase() + "<br>");
document.write(str.toUpperCase() + "<br>");

// includes
document.write(str.includes("is") + "<br>");

// startsWith endsWith
document.write(str.startsWith("hi") + "<br>");
document.write(str.endsWith("moorani") + "<br>");

// search
document.write(str.search("is") + "<br>");

//match
document.write(str.match(/is/g) + "<br>");

// replace
document.write(str.replace("is", "are") + "<br>");