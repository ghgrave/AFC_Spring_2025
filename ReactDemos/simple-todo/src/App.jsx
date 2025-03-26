import { useState } from 'react'
import './App.css'

const App = () => {

  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")

    // example of how to create an object of initial state
    const person = {
            firstName: "",
            lastName: "",
            address1: "",
            address2: ""
    }
    // pass person object of initial values into useState()
    const [people, setPeople] = useState(person)

    // // ORRRRR you can do it the hard way!!!!!
    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")
    // const [address1, setAddress1] = useState("")
    // const [address2, setAddress2] = useState("")

  function handleChange(event) {
      setNewTodo(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newTodos = [...todos].push(newTodo)
    setTodos(newTodos)
    setNewTodo("")
    return true;
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input 
            type="text"
            name="newTodo"
            autoComplete='off'
            placeholder="What needs to be done?"
            onChange={handleChange}
            value={newTodo}
          />
        <input type="submit" className='save-button'/>
      </form>
      <div className="todo-content">
        <ol>
          {todos.map((el, i)=> {
            return (
                <li key={i}>{el}</li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

export default App
