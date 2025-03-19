"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let person1 = {
    fname: "Jane",
    lname: "of the Jungle",
    isMarried: false,
    getFullName: function () {
        return `${this.fname} ${this.lname}`;
    },
    getAge: function (doggy, horse) {
        return doggy * 10;
    }
};
console.log(person1.getFullName());
let person2 = {
    fname: "George",
    isMarried: true,
    getFullName: function () {
        return `${this.fname} ${this.lname}`;
    },
    children: ["Todd", "lisa"]
};
console.log(person2);
