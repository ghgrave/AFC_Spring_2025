let food = document.getElementById("fruit")
console.log(food)
food.style.color = "red"
food.style.backgroundColor= "green"
food.style.fontSize = "50px"

let foods = document.getElementsByClassName("breakfast")
console.log(foods[1])

let foods2 = document.getElementsByTagName("li")
console.log(foods2[0])

let fruit = document.querySelector("#fruit")
console.log(fruit)

let results = document.querySelectorAll("h1")
console.log(results[results.length-1])

let firstLi = document.querySelector("li")
firstLi.textContent = "Sold out!!!"
firstLi.innerHTML = "Chocolate <b>Hazelnut</b> Cookies"

document.querySelector("a").getAttribute("alt")
// console.log(answer)
document.querySelector("a").setAttribute("href", "https://www.amazon.com/")
let button = document.getElementsByTagName("button")
// // button.addEventListener("click", ()=>{
// //     alert("clicked!!!!")
// // })
// for (i = 0; i < button.length; i++){
//     button[i].addEventListener("click", ()=>{
//         alert(`Clicked: ${button[i]}`)
//     })
// }