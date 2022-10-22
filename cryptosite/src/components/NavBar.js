import React from "react";
import "../css/navBar.css";
import { Spin as Hamburger } from "hamburger-react";
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const navigate = useNavigate();
  return (
    <nav className="nav-bar">
      <div
        className="nav-logo"
        onClick={() => {
          navigate("/");
        }}
        style={{ textAlign: "left" }}
      >
        CryptoSearch
      </div>
      <div className="">
        <a href="/">Home</a>
      </div>
    </nav>
  );
};

export default NavBar;
