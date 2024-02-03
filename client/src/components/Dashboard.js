import React, { useEffect } from "react";

const Dashboard = () => {
  const DashboardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch("/validuser");
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
