import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./ContextProvider/Context";

const Dashboard = () => {
  const {logindata , setLogindata} = useContext(LoginContext);
  console.log(logindata)

  const history = useNavigate();

  const DashboardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch("/validuser" , {
        method : "GET",
        headers : {
            "Content-Type":"application/json",
            "Authorization":token
        }
    });


    const data = await res.json();
    
    if(data.status === 401 || !data){
        history("*")
    }else{
      setLogindata(data)
      history("/dash")
    }

  };
  useEffect(() => {
    DashboardValid();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src="./man.png" style={{ width: "200px", marginTop: 20 }} alt="" />
        <h1>User Email:..</h1>
      </div>
    </>
  );
};

export default Dashboard;
