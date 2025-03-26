// foundation
import {useState} from "react"


// function
const App = () => {
    const [days, setDays] = useState(303)

    const handleClick = () =>{
         return setDays(days - 1)
    }

    return (
        <div className="App">
            <h1>Birthday Party Countdown</h1>
            <div className="card">
                <button onClick={handleClick}>Days remaining: {days}</button>
            </div>
        </div>
    )
}

//export
export default App;