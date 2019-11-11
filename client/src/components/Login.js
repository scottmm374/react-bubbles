import React, { useState } from "react";
import api from "../utils/api";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    api()
      .post("/api/login", user)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        console.log("login success");
        // props.history.push("/");
      })
      .catch(err => {
        console.log("login error", err.data.message);
      });
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={user.username}
          placeholder="username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={user.passwor}
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
