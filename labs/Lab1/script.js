/***** #1 - Dynamic Age Calculator
        Use a traditional function to calculate the user’s age.
        Prompt the user to enter their birth year using prompt() and store it in a variable.
        Based on their input, determine how many years old they are.
        Log the calculated age to the console: “Your age is:”
*****/
// function calculateAge() {
//     // Prompt the user to enter their birth year
//     // Convert input to a number
//     let birthYear = parseInt(prompt("Enter your birth year:"))
//
//     // Get the current year
//     let currentYear = new Date().getFullYear();
//
//     // Validate input
//     if (isNaN(birthYear) || birthYear > currentYear || birthYear < 1900) {
//         console.log("Please enter a valid birth year.");
//         return;
//     }
//
//     // Log the age to the console
//     console.log(`Your age is: ${currentYear - birthYear}`);
// }
//
// // Call the function
// calculateAge();

/****** #2 - Simple Interest Calculator
        Use a traditional function named calculateSimpleInterest to calculate the simple interest using the formula:
        Simple Interest = (Principal × Rate × Time)/100
        Prompt the user for the principal amount, rate of interest, and time in years using prompt().
        Store each of these in a separate variable
        Log the result to the console: “Your simple interest is:”
******/

// function calculateSimpleInterest() {
//     // Prompt user for input values
//     // Convert inputs to numbers
//     let principal = parseFloat(prompt("Enter the principal amount:"))
//     let rate = parseFloat(prompt("Enter the rate of interest (in %):"))
//     let time = parseFloat(prompt("Enter the time (in years):"))
//
//     // Validate input
//     if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
//         console.log("Please enter valid positive numbers for all fields.");
//         return;
//     }
//
//     // Calculate simple interest
//     let simpleInterest = (principal * rate * time) / 100;
//
//     // Format the result as currency (USD)
//     let formattedInterest = new Intl.NumberFormat('en-US', {
//         style: 'currency',
//         currency: 'USD'
//     }).format(simpleInterest);
//
//     // Log the result
//     console.log(`Your simple interest is: ${formattedInterest}`);
// }
//
// // Call the function
// calculateSimpleInterest();

/***** #3 -  Favorite Color Selector
         Create an array with three colors.
         Use a traditional function named addColor to add a new color to an array.
         Takes one argument - the array of colors
         Prompt the user to input a color name to add to the array.
         Prepend the users color to the existing array
         Log the updated array to the console using: “Updated colors: “
*****/

// // Initial array of colors
// let colors = ["Red", "Blue", "Green"];
//
// function addColor(colorArray) {
//     // Prompt user for a new color
//     let newColor = prompt("Enter a color to add:");
//
//     // Check if input is valid (not empty or just spaces)
//     if (!newColor || newColor.trim() === "") {
//         console.log("Invalid input. Please enter a valid color name.");
//         return;
//     }
//
//     // Prepend the new color to the array
//     colorArray.unshift(newColor.trim());
//
//     // Log the updated array
//     console.log("Updated colors:", colorArray);
// }
//
// // Call the function with the colors array
// addColor(colors);

/***** #4 - Event Countdown with Date Object
         Use a traditional function named calculateDaysUntil to calculate the number of days remaining until a future event.
         Takes one argument - users event date
         Prompt the user to input the event date in the format YYYY-MM-DD.
         If not in this format - make the user enter in correct format
         Use the Date object to calculate the difference in days between today and the event.
         Log the result to the console using: “Days until the event: “.
 *****/

// function calculateDaysUntil(eventDate) {
//     // Get today's date
//     let today = new Date();
//     // today.setHours(0, 0, 0, 0); //  Optional - Normalize to midnight to avoid time differences
//
//     // Convert user input to Date object
//     let event = new Date(eventDate);
//
//     // Validate if the entered date is valid
//     if (isNaN(event.getTime())) {
//         console.log("Invalid date format. Please enter the date in YYYY-MM-DD format.");
//         return;
//     }
//
//     // Calculate the difference in milliseconds
//     let timeDifference = event.getTime() - today.getTime();
//
//     // Convert milliseconds to days
//     let daysUntil = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
//
//     // Log the result
//     console.log(daysUntil < 0 ?  "The event date has already passed." :  `Days until the event: ${daysUntil}`)
// }
//
// // Prompt the user for the event date
// let userEventDate = prompt("Enter the event date (YYYY-MM-DD):");
//
// // Validate the input format using a regex
// let datePattern = /^\d{4}-\d{2}-\d{2}$/; // RegEx pattern
// while (!datePattern.test(userEventDate)) {
//     userEventDate = prompt("Invalid format! Please enter the event date in YYYY-MM-DD format:");
// }
//
// // Call the function with the user's input
// calculateDaysUntil(userEventDate);

/***** #5 - Temperature Classifier
         Use a traditional function named classifyTemperature to classify a temperature.
                Takes one argument - user input for temperature
         Prompt the user to input the temperature in Celsius.
         Convert into Fahrenheit using this formula
                Fahrenheit = (C x (9/5)) + 32
         Use conditionals to classify the temperature as:
                "Hot," if over 100
                "Warm," if over 80
                "Cold” if under 40
                “Chilly” for everything else
                Error message if number not entered
         Log the classification to the console using: “The temperature is: “
 *****/

// function classifyTemperature(celsius) {
//     // Convert Celsius to Fahrenheit
//     let fahrenheit = (celsius * 9/5) + 32;
//
//     // Determine classification using an expression-based switch
//     let classification = (() => {
//         switch (true) {
//             case (fahrenheit > 100): return "Hot";
//             case (fahrenheit > 80): return "Warm";
//             case (fahrenheit < 40): return "Cold";
//             default: return "Chilly";
//         }
//     })
//     ();
//
//     // Log the result
//     console.log(`The temperature is: ${classification} (${fahrenheit.toFixed(2)}\u00B0F)`); // Unicode escape sequence (\u00B0):
// }
//
// // Prompt the user for a temperature input
// // Convert input to a number and validate
// let userTemperature = parseFloat(prompt("Enter the temperature in Celsius:"));
//
// if (isNaN(userTemperature)) {
//     console.error("Error: Please enter a valid number for temperature.");
// } else {
//     classifyTemperature(userTemperature);
// }

/***** #6 - Student Array Operations
         Hardcode an array of students, each with a name and age based on this info: Alice is 20, Bob is 22, and Charlie is 18
         Use a fat arrow function to modify a student's age in an array of student objects.
         Prompt the user to input the name of the student to modify
                If student does not exist, log an error message
         Prompt the user to input a new age.
                If not a number, log an error message
         Update the student’s age in the array of objects.
         Log the updated array to the console: “Updated students: ”
 *****/

// // ******* Just ONE way to do this!!!!!
// // Hardcoded array of students
// let students = [
//     { name: "Alice", age: 20 },
//     { name: "Bob", age: 22 },
//     { name: "Charlie", age: 18 }
// ];
//
// // Fat arrow function to update a student's age
// const updateStudentAge = (studentName, newAge) => {
//     // Find the student object
//     let student = students.find(s => s.name.toLowerCase() === studentName.toLowerCase());
//
//     if (!student) {
//         console.log("Error: Student not found.");
//         return;
//     }
//
//     // Validate the new age
//     if (isNaN(newAge) || newAge <= 0) {
//         console.log("Error: Please enter a valid number for age.");
//         return;
//     }
//
//     // Update the age
//     student.age = newAge;
//
//     // Log the updated array
//     console.log("Updated students:", students);
// };
//
// // Prompt user for the student's name
// let studentName = prompt("Enter the name of the student to modify:");
//
// // Validate input
// if (!studentName || studentName.trim() === "") {
//     console.log("Error: Please enter a valid name.");
// } else {
//     // Prompt for new age
//     let newAge = prompt("Enter the new age:");
//
//     // Convert input to a number
//     newAge = parseInt(newAge);
//
//     // Call the function to update age
//     updateStudentAge(studentName, newAge);
// }

/***** #7 - Grade Classification
         Use a fat arrow function named classifyGrade to classify grades.
         Prompt the user to input a grade as a number.
         Use conditionals to classify the grade as "A," "B," "C," "D," or "F."
                ONLY use ternaries!!!!
         Log the result to the console using: “The grade classification is: “
 */

// // Fat arrow function using ternary operators to classify grades
// const classifyGrade = grade =>
//     grade >= 90 ? "A" :
//         grade >= 80 ? "B" :
//             grade >= 70 ? "C" :
//                 grade >= 60 ? "D" : "F";
//
// // Prompt the user for a grade
// let userGrade = prompt("Enter the grade (as a number):");
//
// // Convert input to a number and validate
// userGrade = parseFloat(userGrade);
//
// if (isNaN(userGrade) || userGrade < 0 || userGrade > 100) {
//     console.log("Error: Please enter a valid number between 0 and 100.");
// } else {
//     console.log(`The grade classification is: ${classifyGrade(userGrade)}`);
// }
//
// // another option
// // console.log((isNaN(userGrade) || userGrade < 0 || userGrade > 100)
// //     ? "Error: Please enter a valid number between 0 and 100."
// //     : `The grade classification is: ${classifyGrade(userGrade)}`)

/***** #8 - Shopping List Operations
        Hardcode an array representing a shopping list of eggs, butter, and flour.
        Use a fat arrow function named modifyItem to modify items in an array.
                Takes two arguments - the shopping list array and the prompted new item from user.
                Add new item to end of current array
        Log the updated array to the console using: “Updated shopping list: “.
 *****/

// // Hardcoded shopping list array
// let shoppingList = ["Eggs", "Butter", "Flour"];
//
// // Fat arrow function to modify the shopping list
// const modifyItem = (list, newItem) => {
//     if (!newItem || newItem.trim() === "") {
//         console.log("Error: Please enter a valid item.");
//         return;
//     }
//
//     // Append new item
//     list.push(newItem.trim())
//
//     // Log the updated shopping list
//     console.log("Updated shopping list:", list);
// };
//
// // Prompt user for a new shopping item
// let userItem = prompt("Enter a new item to add to the shopping list:");
//
// // Call the function with the user's input
// modifyItem(shoppingList, userItem);

/***** #9 - Weekday Detector
        Use a fat arrow function to determine the day of the week.
        Use the Date object to get the current day.
        Log the day of the week to the console using: “Today is: “
 */

// // Fat arrow function to get the current day of the week
// const getWeekday = () => {
//     // Array of weekday names
//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//
//     // Get current day index (0 = Sunday, 6 = Saturday)
//     let todayIndex = new Date().getDay();
//
//     // Log the current day
//     console.log(`Today is: ${days[todayIndex]}`);
// };
//
// // Call the function
// getWeekday();

/***** #10 - How Long Until Graduation
        Use a fat arrow function to determine today’s date.
        Use the Date object to get the current day.
        Log the day of the week to the console using: “Today is: “
                Display in this format: “2025, January 21st”
                NOTE: use -st, -nd, -rd, -th based on the numerical date
                        22nd, 5th, 9th, 23rd, etc….
        Log how many days left between the current date and last day of course work to the console using: “And you have <days> left in this web design program until graduation. “
                Last day is 5/17/25
                Rough idea. Does not need to be 100% accurate but should be within a few days of actual answer.
 *****/

// Fat arrow function to get today's date in the correct format
const getFormattedDate = () => {
    const date = new Date();

    // Array of weekday names
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Array of month names
    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    let dayOfWeek = daysOfWeek[date.getDay()];
    let month = months[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();

    // Function to determine ordinal suffix (-st, -nd, -rd, -th)
    const getOrdinalSuffix = (num) => {
        if (num >= 11 && num <= 13) return "th"; // Special case for 11th, 12th, 13th
        switch (num % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };

    let formattedDate = `${year}, ${month} ${day}${getOrdinalSuffix(day)}`;

    console.log(`Today is: ${dayOfWeek}, ${formattedDate}`);
};

// Fat arrow function to calculate days until graduation (5/17/25)
const daysUntilGraduation = () => {
    let today = new Date();
    let graduationDate = new Date(2025, 4, 17); // May 17, 2025 (Months are 0-based)

    let timeDiff = graduationDate - today;
    let daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

    console.log(`And you have ${daysLeft} days left in this web design program until graduation.`);
};

// Call both functions
getFormattedDate();
daysUntilGraduation();