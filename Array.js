// var arr = [1,2,3,4,5];
// // document.write(arr);

// // document.write(arr[2]);
// var sum =0;
// for(i= 0; i<=4; i++){
//     document.write(arr[i] + "<br>");

//     sum = sum + arr[i];
// }
// document.write("Sum of array is: " + sum + "<br>");



// another way to write array

// var arr1 = new Array();
// arr1[0]= "Sandeep";
// arr1[1]= "Raj";
// arr1[2]= "Rohit";

// for(i=0; i<3; i++){
//     document.write(arr1[i] + "<br>");
// }

// Array with different data types
// var arr2 = [true, "Sandeep", null, "Raj", 3, "Rohit"];
// for(i=0; i<6; i++){
//     document.write(arr2[i] + "<br>");
// }


// var arr2 = new Array(3);

// for (var  g=0;g<3; g++){
    // arr2[g]= prompt("Enter the value of array");
    // document.write(arr2[g] + "<br>");
// }

// for (i=0; i<3; i++){
//     document.write(arr2[i] + "<br>");
// }



// multidimensional array

// var arr3 = [
//     ["Sandeep", 15,"Male","SWE"],
//     ["Sohail", 16,"Male","SWE"],
//     ["Lachamn", 18,"Male","CSE"],
//     ["Ali", 20,"Male","SW"],
//     ["Alibhai", 20,"Male","SW"],
//     ["Alijan", 20,"Male","SW"],
//     ["Alihi", 20,"Male","SW"],
//     ["Alihello", 20,"Male","SW"],

// ];

// arr3[0][0]="Moorani";
// arr3[0][0]="Sandeep Moorani";

// document.write("<table border= '1px'cellspacing='0'  >");

// for(var a=0; a<8; a++){

//     document.write("<tr>");

//     for(var b=0; b<4; b++){
//         document.write(" <td>" + arr3[a][b] + " </td>");
//     }
//     document.write( "</tr>");

// }
// document.write("</table>");

// document.write(arr3.length);




//array methods

// var arr4 = [1,2,5,4,6,8,7,9,3];

// var arr4 = ["Sandeep", "Raj", "Rohit", "Sohail", "Ali", "Alijan", "Alihi", "Alihello"];
// sort() method

// document.write(arr4.sort()+ "<br>");

// reverse() method

// document.write(arr4.reverse());

// push() method

// arr4.push("Ahsan");
// document.write(arr4);

// pop() method

// arr4.pop();
// document.write(arr4);

// document.write(arr4.pop());

// shift() method

// arr4.shift();
// document.write(arr4);

// unshift() method

// arr4.unshift("hello");
// document.write(arr4);

// var arr5 = [1,2,3,4,5,6,7,8,9,10];
// splice() method

// arr5.splice(1,3);
// document.write(arr5 + "<br>");

// slice() method

// arr5.slice(1,3);
// document.write(arr5);


var arr6 = ["sandeep", "raj", "rohit", "sohail"];

document.write(arr6 + "<br>");

// indexOf() method
document.write(arr6.indexOf("sohail") + "<br>");

// lastIndexOf() method
document.write(arr6.lastIndexOf("sandeep",2) + "<br>");

// some() method

var result = arr6.some(function(value){
    return value == "sandeep";
});
document.write(result + "<br>");

// every() method

var result = arr6.every(function(value){
    return value == "sandeep";
});
document.write(result + "<br>");

//find() method

var result = arr6.findIndex(function(value){
    return value == "sandeep";
}
);
document.write(result + "<br>");

// filter() method

var arr7 = [12,30,18,21];

var result = arr7.filter(function(value){
    return value >=18;
}
);
document.write(result + "<br>");

//toString() method

document.write(arr6.toString() + "<br>");

// fill() method

var arr8 = [1,2,3,4,5,6,7,8,9,10];
arr8.fill(0);
document.write(arr8 + "<br>");

// foreach() method

arr6.forEach(function(value, index, array){
    document.write(value + index+array+ "<br>");
}
);









