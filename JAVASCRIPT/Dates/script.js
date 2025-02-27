const d = new Date()
let day = d.getDay()
let hh = d.getHours()
let mm = d.getMinutes()
let ss = d.getSeconds()
let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log(`Today is: ${daysOfTheWeek[day]}, ${hh}:${mm}:${ss}`);

