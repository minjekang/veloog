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
            <Link to="search">
              <img src="images/search.png" className="search" />
            </Link>
            <button className="login">로그인</button>
          </div>
        </div>
      </header>
      <div className="navi">
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
            <select>
              <option value="이번주" className="op">
                이번주
              </option>
            </select>
          </div>
          <img src="images/menu.png" className="menu" />
        </nav>
      </div>
    </>
  );
}
export default Header;
