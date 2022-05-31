import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search.js";
import Main from "./pages/Main.js";
import Header from "./components/header/Header";
import Headroom from "react-headroom";
import Recent from "./pages/Recent";
import Posting from "./pages/Posting";
import LoginModal from "./components/modal/login/loginModal";
import { loginStore } from "./store";

function App() {
  const isOpen = loginStore((state) => state.isOpen);
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <>
      {<LoginModal />}
      <BrowserRouter>
        <Headroom>
          <Header />
        </Headroom>

        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/recent" element={<Recent />}></Route>
          <Route path="@:nickname/:title" element={<Posting />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
