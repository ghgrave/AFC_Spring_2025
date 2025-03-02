// take a number and square
function squares(num) {
    return num * num;
}

console.log(squares(5));

// let squares2 = function(num){
//   return num*num
// }
// console.log(squares2(6));

// IIFE
// (function(){
//   console.log("Hello")
// })()

// convert to a fat arrow
const squares2 = (num) => {
    return num * num;
};
console.log(squares2(7));

// convert to a fat arrow, remove parentheses
const squares3 = (num) => {
    return num * num;
};
console.log(squares3(9));

// convert to a fat arrow, with implied return
const squares4 = (num) => num * num;
console.log(squares4(10));

// convert to a fat arrow, with implied return
// multiple lines
const squares5 = (num) => num * num;
console.log(squares5(12));

// convert to a fat arrow, with implied return
// multiple lines
const area = function (num1 = 5, num2 = 4, num3) {
    return num1 * num2;
}
console.log("Area: ", area(0, undefined, 8));
