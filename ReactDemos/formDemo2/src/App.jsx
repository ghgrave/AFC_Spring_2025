import {useState} from "react";

const App = () => {
    const initialState = {
        fname: "",
        age: 0
    }

    // const [firstName, setFirstName] = useState("")
    // const [myAge, setMyAge] = useState(0)
    const [formData, setFormData] = useState(initialState)
    const {fname, age} = formData

    function handleSubmit(evt) {
        evt.preventDefault()
        console.log(formData)
    //     send to database
    //     axios call
    }

    function handleChange(event) {
        // console.log(event)
        setFormData(
            {...formData, // spread operator so we do not lose current values
                [event.target.name]: event.target.value} // integrate current values into prev values
        )
        console.log(formData)

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>First Name:
                <input
                    type="text"
                    name="fname"
                    value={fname}
                    onChange={handleChange}/>

            </label>
            <br/>
            <label>Age:
                <input type="number" name="age" value={age} onChange={handleChange}/>
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    );
};

export default App;