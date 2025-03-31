import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(7)
    const [isSeven, setIsSeven] = useState(false)

    const handleClick = () => {
        // create random number
        let newCount = Math.floor(Math.random()*10+1)
        setCount(newCount)
        setIsSeven(newCount === 7)
        console.log("Clicked")
    }
  return (
    <>
      <h1>Welcome to Valhalla!!!</h1>
        {/*user clicks the button
            generate a random number*/}
        <button
            style={{visibility: isSeven ? "hidden" : "visible", fontSize: "24px"}}
            onClick={handleClick}
        >
            Click Me!!!
        </button>
        <h2>{count}</h2>
        {/*short circuiting*/}
        {/*What it does:
                This line conditionally renders the <h1> element.
                 If isSeven is true, the <h1> is rendered.
                 If isSeven is false, nothing is rendered.*/}
        {isSeven && <h1>You win!!</h1>}
    </>
  )
}

export default App
