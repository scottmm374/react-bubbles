import React, { useState } from "react";
import api from "../utils/api";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form>
        <input
          type="text"
          name="username"
          value=""
          placeholder="username"
          onChange=""
        />
        <input
          type="password"
          name="password"
          value=""
          placeholder="password"
          onChange=""
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
