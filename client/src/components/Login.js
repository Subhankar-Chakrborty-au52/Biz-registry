import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./mix.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Login = () => {
  const history = useNavigate();

  const [passShow, setPassShow] = useState(false);

  const [inpval, setInpVal] = useState({
    email: "",
    password: "",
  });

  const setVal = (e) => {
    // console.log(e.target.value);

    const { name, value } = e.target;
    setInpVal(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();

    const { email, password } = inpval;

    if (email === "") {
      alert("Enter your email");
    } else if (!email.includes("@")) {
      alert("Enter valid email");
    } else if (password === "") {
      alert("Enter your password");
    } else if (password.length < 6) {
      alert("password must be 6 char");
    } else {
      // console.log("user login successfully");

      const data = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const res = await data.json();
      // console.log(res);

      if (res.status === 201) {
        localStorage.setItem("usersdatatoken", res.result.token);
        history("/dash");
        setInpVal({ ...inpval, email: "", password: "" });
      }
    }
  };

  return (
    <>
      {/* login page */}

      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome Back, Log In</h1>
            <p>Hi,we are you glad you are back.Please login.</p>
          </div>

          <form>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Role
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Admin"
                  control={<Radio />}
                  label="Admin"
                />
                <FormControlLabel
                  value="User"
                  control={<Radio />}
                  label="User"
                />
              </RadioGroup>
            </FormControl>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={inpval.email}
                onChange={setVal}
                name="email"
                id="email"
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  onChange={setVal}
                  value={inpval.password}
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                />

                {/* we add onclick function to show password */}

                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <button className="btn" onClick={loginUser}>
              Login
            </button>
            <p>
              Don't have an Account? <NavLink to="/register">Sign Up</NavLink>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
