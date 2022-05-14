import React, { useState } from "react";
import "./loginModal.scss";
const LoginModal = () => {
  return (
    <div className="loginModal-wrap">
      <div className="loginModal">
        <div className="login-leftBox">
          <div className="welcome-wrap">
            <img src="images/loginChar.png" className="welcome-ch" />
            <h4>환영합니다!</h4>
          </div>
        </div>
        <div className="login-rightBox">
          <div className="close-wrap">
            <img src="images/close.png" className="close" />
          </div>
          <div className="login-wrap">
            <h4 className="login-tit">로그인</h4>
            <section>
              <h3 className="emailLogin">이메일로 로그인</h3>
              <form className="email-input">
                <input placeholder="이메일을 입력하세요."></input>
                <button>로그인</button>
              </form>
            </section>
            <section className="socialLogin">
              <h3>소셜 계정으로 로그인</h3>
              <section>
                <div className="github">
                  <img src="images/github.png"></img>
                </div>
                <div className="google">
                  <img src="images/google.png"></img>
                </div>
                <div className="facebook">
                  <img src="images/facebook.png"></img>
                </div>
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
