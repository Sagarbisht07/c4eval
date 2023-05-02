import React, { useRef } from "react";
import axios from "axios";

const Login = () => {
  let email = useRef(null);
  let password = useRef(null);

  const loginuser = async (e) => {
    e.preventDefault();
    let user = {
      email: email.current.value,
      password: password.current.value,
    };

    axios.post("http://localhost:8000/users/login", user).then((res) => {
      console.log(res.data);
      alert("login success");
      localStorage.setItem("token", res.data.token);
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginuser}>
        <input type="text" placeholder="email" ref={email} />
        <input type="password" placeholder="Password" ref={password} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
