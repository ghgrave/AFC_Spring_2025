import { useState } from 'react'
import './App.css'

const App = () => {

  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")

  function handleChange(event) {
      setNewTodo(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newTodos = [...todos, newTodo]
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
