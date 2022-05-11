import React from "react";
import { Link } from "react-router-dom";
import "./Contents.scss";
const Contents = () => {
  return (
    <div id="c-wrap">
      <Link to="@:nickname/:title" className="c-post">
        <img className="c-post-img"></img>
        <div className="c-post-text">
          <h4>요즘 뜨고있는 이주원.js 사용방법</h4>
          <div className="description-wrapper">
            <p className="description">
              이주원.js의 기본적인 개념과 사용법을 다룬 글입니다.
            </p>
          </div>
          <div className="sub-info">
            <span>2022년 5월 9일</span>
            <span> · </span>
            <span>10개의 댓글</span>
          </div>
        </div>
        <div className="profile">
          <span className="user">
            <div className="user-img"></div>
            <span>
              <b className="by">by </b>
              <b>miinjje</b>
            </span>
          </span>
          <div className="like">
            <img src="images/like.png" className="heart" />
            <b>77</b>
          </div>
        </div>
      </Link>

      <div className="c-post"></div>
      <div className="c-post"></div>
      <div className="c-post"></div>
      <div className="c-post"></div>
    </div>
  );
};

export default Contents;
