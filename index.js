var array = [1, 2, 3, 4, 5, 6];
var result = array.slice(1, 3);
console.log(result);
// output is : [ 2, 3 ]
var ok = array.slice(-2, 5);
console.log(ok);
// output is : [ ] empty array. Because slice method goes left to right
// here i am giving the starting position is -1 means it will starting iterating from the last which is 5. After 5 no elemts is available on the right SVGGradientElement. so ans is empty array
var a=array.slice();
console.log(a)
// output will be the full array : [ 1, 2, 3, 4, 5, 6 ]
var b= array.slice(1,6);
console.log(b);
// output will be [ 2, 3, 4, 5, 6 ]
