import React, { useState } from "react";
import "./loginModal.scss";
const LoginModal = () => {
  return (
    <div className="loginModal-wrap">
      <div className="loginModal">
        <button>close</button>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
