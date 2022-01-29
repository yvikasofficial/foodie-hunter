import React from "react";

const Login = () => {
  return (
    <div className="login">
      <div className="login__wrapper">
        <img src="/images/foodie hunter.png" alt="" />
        <h2>Login</h2>
        <input placeholder="enter your email" type="email" />
        <input placeholder="enter your password" type="password" />
        <div className="button">Login</div>
      </div>
    </div>
  );
};

export default Login;
