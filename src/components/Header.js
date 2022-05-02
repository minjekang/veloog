import React from "react";
import { Link } from "react-router-dom";
import "../style/component.scss";
function Header() {
  return (
    <>
      <header>
        <div className="head">
          <div className="logo">
            <img src="images/logo.png" />
            <img src="images/logo.png" className="logo-bold" />
          </div>
          <div className="headiv">
            <img src="images/sun.png" className="sun" />
            <img src="images/search.png" className="search" />
            <button className="login">로그인</button>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
