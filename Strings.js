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

//charAT
document.write(str.charAt(5) + "<br>");

//charCodeAt
document.write(str.charCodeAt(5) + "<br>");

//split
document.write(str.split(" ") + "<br>");

//substring
document.write(str.substring(5, 10) + "<br>");

//slice
document.write(str.slice(5, 10) + "<br>");

//substr
document.write(str.substr(5, 10) + "<br>");

//trim
document.write(str.trim() + "<br>");

// valueOf
document.write(str.valueOf() + "<br>");
