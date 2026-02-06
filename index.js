//question 1
var a = [1, 2, 3, 4, 5];
var start = 0;
var end = a.length - 1;

while (start < end) {
    var temp = a[start];
    a[start] = a[end];
    a[end] = temp;
    start++;
    end--;
}
console.log(a);

//question 4
var a = [1,2,3], b = [4,5,6];
var c = [...a, ...b];
console.log(c);

