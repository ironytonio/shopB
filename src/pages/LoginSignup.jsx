import React from "react";
import q from "./LoginSignup.module.css";

const LoginSignup = () => {
  return (
    <div className={q.loginSignup}>
      <div className={q.container}>
        <h1>Sign Up</h1>
        <div className={q.fields}>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className={q.login}>
          Already have an account? <span>Login here</span>
        </p>
        <div className={q.agree}>
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to thenterms of use privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
