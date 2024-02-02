import React from "react";
import "./mix.css";

const Login = () => {
  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome Back, Log In</h1>
            <p>Hi,we are you glad you are back.Please login.</p>
          </div>

          <form>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
