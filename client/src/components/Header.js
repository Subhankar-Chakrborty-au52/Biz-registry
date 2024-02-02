import React from "react";
import Avatar from "@mui/material/Avatar";
import "./header.css";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <h1>Biz Cloud</h1>
          <div className="avtar">
            <Avatar style={{ backgroundColor: "blue" }}>B</Avatar>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
