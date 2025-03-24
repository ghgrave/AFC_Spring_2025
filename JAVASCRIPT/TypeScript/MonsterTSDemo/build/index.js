"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const monsterTypes_1 = require("./models/monsterTypes");
const monster1 = {
    firstName: "Zorg",
    age: 500,
    type: monsterTypes_1.MonsterType.Undead,
    moreInfo: "Terrifies entire galaxies",
};
const monster2 = {
    firstName: "Blobbo",
    age: 3,
    type: monsterTypes_1.MonsterType.Blob,
    moreInfo: "Absorbs everything in sight",
};
const monster3 = {
    firstName: "Alice",
    lastName: "Smith",
    age: 28,
    type: monsterTypes_1.MonsterType.Human,
    moreInfo: "Monster researcher",
};
const monster4 = {
    firstName: "Vlad",
    age: 1000,
    type: "Undead",
    moreInfo: "Shapeshifter; bats, rats, and cats",
    powerLevel: 100
};
const monsters = [monster1, monster2, monster3];
console.log(monsters);
const MonsterData = ["Vlad", 1000, "Undead"];
console.log(MonsterData);
