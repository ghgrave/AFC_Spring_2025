// consume an API
// what are the rules
// free or credentials/permission - FREE
// need to know endpoints: endpoint = baseURL + route - DONE
// HOW is the data being sent back??? - JSON or XML - JSON
// How MUCH data is coming back and what does it look like? - ONE thing possibly an object
//

// https://dog.ceo/api/breeds/list/all
//https://dog.ceo/api/breeds/image/random
// https://dog.ceo/api/breed/hound/images
const BASEURL = "https://dog.ceo/api"
let route = "breeds/image/random"
let endpoint = `${BASEURL}/${route}`

let button = document.getElementsByTagName("button")
button[0].addEventListener("click", ()=> {
    //fetch skeleton
    fetch(endpoint) // utilize endpoint
        .then(data => {
            // get data ; if ok - parse it, else error handling
            console.log(data)
            if(data.ok) {
                let result = data.json()
                return result
            } else {
                throw Error("Jack broke it!!!!!!!")
            }
        })
        .then(parsedData => {
            let img = document.querySelector("img")
            console.log(parsedData)
            img.setAttribute("src", parsedData.message)
        }) // deal with parsed data
        .catch(error => {
            console.log(error)
        }) // error handling
})


