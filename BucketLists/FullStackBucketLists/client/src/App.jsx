import {useState, useEffect} from "react"
import axios from "axios"
import "./App.css"
const App = () =>{

    const [bucketList, setBucketList] = useState([])
    const [newItem, setNewItem] = useState("")
    const baseUrl = "http://localhost:3000"

    useEffect(
        ()=>{
        //     communicate with the server
            let route = "api/bucket"
            let endpoint = `${baseUrl}/${route}`
            axios.get(endpoint)
                .then(result => {
                    setBucketList([...result.data])
                })
                .catch(err => console.log(err))
        }
    , [])

    let myList = bucketList.map((el)=>{
        return <li key={el.id}
                        className={el.isComplete ? "completed":  ""}
                    >{el.description}</li>
    })

    const handleChange = (evt) => {
        setNewItem(evt.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let item = {
            description: newItem,
            isComplete: false
        }

        let route = "api/bucket"
        let endpoint = `${baseUrl}/${route}`
        let options = {
            method: "post",
            url: endpoint,
            data: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json"
            }
        }
        console.log("data on front end: ", options.data)
        axios(options)
            .then(result => {
                console.log("Front end result: ", result)
            })
            .catch(err => {
                console.log(err)
            })

    };

    return (
        <>
            <h1>Bucketlist!</h1>
            <br/>
            <form onSubmit={handleSubmit}>
                <br/>
                <label >What do you want to do before you kick thew bucket?
                    <br/>
                    <input
                        type="text"
                        name="newItem"
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Save</button>
            </form>
            <ul>
                {myList}
            </ul>
        </>

    )
}

export default App