import { useState } from "react";

const LoginForm =() => {

    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () =>{
        setShowPassword(!showPassword)
    }
    
  return (
      <form action="/sendData">
        <input type="email" name="email" id="email" placeholder={"Enter email..."}/>
        <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder={"Enter password..."}
        />

          <i className="fa-solid fa-eye" onClick={handleShowPassword}></i>
          <input
              type="checkbox"
              name=""
              id=""
              onChange={handleShowPassword}
          />
        <button type="submit">Submit</button>
      </form>

  )
}

export default LoginForm;