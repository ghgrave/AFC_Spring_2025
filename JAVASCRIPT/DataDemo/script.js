// alert("Goodbye!!")

//user completes form

// retrieve data = names
let form = document.getElementsByTagName("form")[0]
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    let username = document.getElementById("userName").value
    let password = document.getElementById("pw").value
    let areMarried = document.querySelector('input[name="isMarried"]:checked').value
    let person = {
        username: username,
        password: password,
        areMarried: areMarried
    }
    // convert to JSON
    let str = JSON.stringify(person)

    // send data to server
    // fetch(endpoint,
    //     {method: "POST"})
    //     .then()
    //     .then()
    //     .catch()
    console.log(str)
    username.value = ""
})
// build an object using this data

//do something - like send to a database

let title = document.getElementById("movieSearch").value
let route = `api/breeds/${title}/random`