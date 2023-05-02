import React, { useRef } from "react";
import axios from "axios";

const Register = () => {
  let name = useRef(null);
  let email = useRef(null);
  let gender = useRef(null);
  let password = useRef(null);

  const registeruser = async (e) => {
    e.preventDefault();
    let user = {
      name: name.current.value,
      email: email.current.value,
      gender: gender.current.value,
      password: password.current.value,
    };

    axios.post("http://localhost:8000/users/register", user).then((res) => {
      console.log(res.data);
      alert("register success");
    });
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registeruser}>
        <input type="text" placeholder="Username" ref={name} />
        <input type="text" placeholder="email" ref={email} />
        <input type="text" placeholder="gender" ref={gender} />
        <input type="password" placeholder="Password" ref={password} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
