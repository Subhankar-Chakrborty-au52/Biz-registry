import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./mix.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Register = () => {
  const [passShow, setPassShow] = useState(false);

  const [cpassShow, setCPassShow] = useState(false);

  const [inpval, setInpVal] = useState({
    fname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const setVal = (e) => {
    const { name, value } = e.target;
    setInpVal(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addUserData = async (e) => {
    e.preventDefault();

    const { fname, email, password, cpassword } = inpval;

    if (fname === "") {
      alert("Please enter your name");
    } else if (email === "") {
      alert("Enter your email");
    } else if (!email.includes("@")) {
      alert("Enter valid email");
    } else if (password === "") {
      alert("Enter your password");
    } else if (password.length < 6) {
      alert("password must be 6 char");
    } else if (cpassword.length < 6) {
      alert("Enter your confirm password");
    } else if (cpassword.length < 6) {
      alert("password must be 6 char");
    } else if (password !== cpassword) {
      alert("password and cofirm password not match");
    } else {
      // console.log("user registration successfully");

      const data = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          email,
          password,
          cpassword,
        }),
      });

      const res = await data.json();
      // console.log(res);

      if (res.status === 201) {
        alert("user registered successfully");
        setInpVal({
          ...inpval,
          fname: "",
          email: "",
          password: "",
          cpassword: "",
        });
      }
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p style={{ textAlign: "center" }}>
              We are glad that you will be using Project Cloud.
            </p>
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
              <label htmlFor="fname">Name</label>
              <input
                type="text"
                onChange={setVal}
                value={inpval.fname}
                name="fname"
                id="fname"
                placeholder="Enter Your  Name"
              />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={setVal}
                value={inpval.email}
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

                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            <div className="form_input">
              <label htmlFor="password">Confirm Password</label>
              <div className="two">
                <input
                  type={!cpassShow ? "password" : "text"}
                  onChange={setVal}
                  value={inpval.cpassword}
                  name="cpassword"
                  id="cpassword"
                  placeholder="Enter Your Confirm Password"
                />

                <div
                  className="showpass"
                  onClick={() => setCPassShow(!cpassShow)}
                >
                  {!cpassShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            <button className="btn" onClick={addUserData}>
              Sign Up
            </button>
            <p>
              Already have an account? <NavLink to="/">Log In</NavLink>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
