import React from "react";
import "../style/component.scss";
function Header() {
  return (
    <>
      <header>
        <div className="head">
          <p className="logo">veloog</p>
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
