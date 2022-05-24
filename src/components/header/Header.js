import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginStore } from "../../store";
import "./Header.scss";
const Header = () => {
  const setIsOpen = loginStore((state) => state.setIsOpen);

  return (
    <>
      <header>
        <div className="head">
          <Link to="/" className="logo">
            <img src="images/logo.png" />
            <img src="images/logo.png" className="logo-bold" />
          </Link>
          <div className="headiv">
            <img src="images/sun.png" className="sun" />
            <Link to="search">
              <img src="images/search.png" className="search" />
            </Link>
            <button className="login" onClick={() => setIsOpen()}>
              로그인
            </button>
          </div>
        </div>
      </header>

      <div id="navi">
        <nav>
          <div className="header-left">
            <div className="trendingRecent">
              <Link to="/" className="trending">
                <img src="images/up.png" className="up" />
                트렌딩
              </Link>
              <Link to="recent" className="recent">
                <img src="images/clock.png" className="clock" />
                최신
              </Link>
            </div>
            <select className="navTag">
              <option className="op">오늘 </option>
              <option className="op">이번 주 </option>
              <option className="op">이번 달 </option>
              <option className="op">올해 </option>
            </select>
          </div>
          <img src="images/menu.png" className="menu" />
        </nav>
      </div>
    </>
  );
};
export default Header;
