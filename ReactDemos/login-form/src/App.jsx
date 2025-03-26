import {useState} from "react"
import LoginForm from "./components/LoginForm.jsx";

const App = () => {

    const [showPassword, setShowPassword] = useState(false)


    return (
        <LoginForm />
    )
}

export default App

