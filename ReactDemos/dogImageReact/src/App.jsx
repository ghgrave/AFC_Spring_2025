import axios from "axios"
import log from "eslint-plugin-react/lib/util/log.js";


const App = () => {
    const baseURL = "https://dog.ceo/api"
    const handleClick = () => {
        // console.log("Clicked")
        let route = "breeds/image/random"
        let endpoint = `${baseURL}/${route}`
        axios.get(endpoint)
            .catch(err => {
                console.error("Error: ", err)
            })
            .then(response => console.log("Response: ", response.data.message))
    }
    return (
        <>
            <h1>Dog Image Generator</h1>
            <button onClick={handleClick}>Click Me</button>
            <img src="" alt=""/>
        </>
        
        
    )
}

export default App;