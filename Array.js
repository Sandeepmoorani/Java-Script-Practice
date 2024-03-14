var arr = [1,2,3,4,5];
// document.write(arr);

// document.write(arr[2]);
var sum =0;
for(i= 0; i<=4; i++){
    document.write(arr[i] + "<br>");

    sum = sum + arr[i];
}
document.write("Sum of array is: " + sum);