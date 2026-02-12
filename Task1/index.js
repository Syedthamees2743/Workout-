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

//largest no 
var a = [20, 56, 78, 90, 12];
var max = a[0];
for (var i = 1; i < a.length; i++) {
    if (a[i] > max) {
        max = a[i];
    }   
}
console.log("Largest No :" + max);


//smallest no
var a = [20, 56, 78, 90, 12];
var min = a[0];
for (var i = 1; i < a.length; i++) {
    if (a[i] < min) {
        min = a[i];
    }   
}
console.log("Smallest No :" + min);




var a = [9,6,7,4,31];
for (var i = 0; i < a.length; i++) {
  var count = 0;
  for (var j = 2; j <a[i]; j++) {
    if (a[i] % j == 0) {
      count++;
    }
  }
 if (count !== 0) {
    console.log(a[i] + " not is prime");
  }
}




