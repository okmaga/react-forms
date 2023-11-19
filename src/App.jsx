import React, { useState } from "react";
import Signin from "./layout/Signin";
import Signup from "./layout/Signup";
import "./app.css";

const App = () => {
  const [signIn, setSignIn] = useState(true);
  const handleSubmit = (data) => {
    alert(JSON.stringify(data));
    console.log(data);
  };
  return (
    <div className="App">
      <div>
        <button onClick={() => setSignIn(prev => !prev)}>{signIn ? "Don't have an account? Sign up" : "Log in"}</button>
      </div>
      {signIn ?
        <Signin onSubmit={handleSubmit} />
        : <Signup onSubmit={handleSubmit} /> }
    </div>
  );
};

export default App;
