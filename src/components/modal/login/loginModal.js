import React from "react";

const login = () => {
  return (
    <>
      <button onClick={() => setIsOpen(false)}>close</button>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
    </>
  );
};

export default login;
