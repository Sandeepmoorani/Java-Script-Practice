var arr = [1,2,3,4,5];
// document.write(arr);

// document.write(arr[2]);
var sum =0;
for(i= 0; i<=4; i++){
    document.write(arr[i] + "<br>");

    sum = sum + arr[i];
}
document.write("Sum of array is: " + sum + "<br>");



// another way to write array

var arr1 = new Array();
arr1[0]= "Sandeep";
arr1[1]= "Raj";
arr1[2]= "Rohit";

for(i=0; i<3; i++){
    document.write(arr1[i] + "<br>");
}

// Array with different data types
var arr2 = [true, "Sandeep", null, "Raj", 3, "Rohit"];
for(i=0; i<6; i++){
    document.write(arr2[i] + "<br>");
}


var arr2 = new Array(3);

for (var  g=0;g<3; g++){
    arr2[g]= prompt("Enter the value of array");
    document.write(arr2[g] + "<br>");
}

// for (i=0; i<3; i++){
//     document.write(arr2[i] + "<br>");
// }
