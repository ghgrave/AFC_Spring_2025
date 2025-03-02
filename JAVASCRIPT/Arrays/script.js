// 
// .filter()
// let newNumbers = [2, 3, 4]
// let newArray = newNumbers.filter(function(kittycat){
//   return kittycat % 2 === 0 //should be even only - returns only the element that passes
// })
// console.log(newArray);

// .sort() - strings only
// let fruits = ["banana", "Apple", "acorn"]
// fruits.sort()
// let newFruits = fruits.map(el =>{
//   return el.toLocaleLowerCase()
// })
// let newFruits = fruits.map(el =>{
//   return el.toLocaleLowerCase()
// })
// console.log(newFruits.sort());


let numbers = [10, 1, 100, 3, 34, 11]
numbers.sort(function (a, b) {
    // return a-b // ascending
    return b.age - a.age // descending
})
console.log(numbers);


