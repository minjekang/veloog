import React, { useState, useEffect } from "react";
import { loginStore } from "../../../store";
import "./loginModal.scss";
import styled from "styled-components";
const LoginModal = () => {
  const setIsOpen = loginStore((state) => state.setIsOpen);
  const isOpen = loginStore((state) => state.isOpen);
  const setSignUp = loginStore((state) => state.setSignUp);
  const signUp = loginStore((state) => state.signUp);
  const Background = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    z-index: 5;
    opacity: 0.7;
  `;

  return (
    <>
      {signUp ? (
        <>
          <Background />
          <div className="loginModal-wrap">
            <div className={isOpen ? "openLoginModal" : "closeLoginModal"}>
              <div className="login-leftBox">
                <div className="welcome-wrap">
                  <img src="images/loginChar.png" className="welcome-ch" />
                  <h4>환영합니다!</h4>
                </div>
              </div>
              <div className="login-rightBox">
                <div className="close-wrap">
                  <img
                    src="images/close.png"
                    className="close"
                    onClick={() => {
                      setIsOpen();
                    }}
                  />
                </div>
                <div className="login-wrap">
                  <section>
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
                  </section>
                  <footer>
                    <b>아직 회원이 아니신가요? </b>
                    <span onClick={() => setSignUp()}>회원가입</span>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Background />
          <div
            style={{ display: isOpen ? "flex" : "none" }}
            className="loginModal-wrap"
          >
            <div className={isOpen ? "openLoginModal" : "closeLoginModal"}>
              <div className="login-leftBox">
                <div className="welcome-wrap">
                  <img src="images/loginChar.png" className="welcome-ch" />
                  <h4>환영합니다!</h4>
                </div>
              </div>
              <div className="login-rightBox">
                <div className="close-wrap">
                  <img
                    src="images/close.png"
                    className="close"
                    onClick={() => {
                      setIsOpen();
                    }}
                  />
                </div>
                <div className="login-wrap">
                  <section>
                    <h4 className="login-tit">회원가입</h4>
                    <section>
                      <h3 className="emailLogin">이메일로 회원가입</h3>
                      <form className="email-input">
                        <input placeholder="이메일을 입력하세요."></input>
                        <button>회원가입</button>
                      </form>
                    </section>
                    <section className="socialLogin">
                      <h3>소셜 계정으로 회원가입</h3>
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
                  </section>
                  <footer>
                    <b>계정이 이미 있으신가요? </b>
                    <span onClick={() => setSignUp()}>로그인</span>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LoginModal;
