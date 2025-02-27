let person = {
  name: "Walter White",
  age: 50,
  family: ["Skylar", "Flynn", "Holly"],
  city: "Albuquerque",
  smart: true,
  associates: {
    friend: "Jesse",
    enemy: "Gus",
  },
  hobbies: "Cooking",
};

// let result = person["associates"]["friend"]
let result = person["family"][2]

console.log(result);

