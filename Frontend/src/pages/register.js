import React from 'react'

const Register = () => {
  return (
    <div>
    <h1>Register</h1>
    <form>
      <input type="text" placeholder="Username" />
      <input type="text" placeholder="email" />
      <input type="text" placeholder="gender" />
      <input type="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  </div>
  )
}

export default Register