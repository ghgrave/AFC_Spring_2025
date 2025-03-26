import { useState } from "react";

const LoginForm =() => {
  return (
      <form action="/sendData">
        <input type="email" name="email" id="email" placeholder={"Enter email..."}/>
        <input type="password" name="password" id="password" placeholder={"Enter password..."}/>
        <button type="submit">Submit</button>
      </form>

  )
}

export default LoginForm;