import React from "react";
import add from "../images/addAvatar.png";
function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">sharma chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign in</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
}

export default Login;
