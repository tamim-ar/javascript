var orange = 100;
var apple = 200.000001;
var banana = '300';
banana = parseInt(banana);
var guava = parseInt('400.0');

console.log(orange + apple + banana + guava); // 100 + 200 + 300 + 400 = 1000

console.log(apple.toFixed(2)); // 200.00