import {Person} from "./helper"

let person1: Person = {
    fname: "Jane",
    lname: "of the Jungle",
    isMarried: false,
    getFullName: function(){
        return `${this.fname} ${this.lname}`
},
    getAge: function (doggy, horse){
        return doggy * 10
    }
}
console.log(person1.getFullName())

// Create a second person
// children - 2 with names
// getAge is optional
let person2: Person = {
    fname: "George",
    isMarried: true,
    getFullName: function(){
        return `${this.fname} ${this.lname}`
    },
    children: ["Todd", "lisa"]
}

console.log(person2)


