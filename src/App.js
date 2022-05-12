import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search.js";
import Main from "./pages/Main.js";
import Header from "./components/header/Header";
import Headroom from "react-headroom";
import Recent from "./pages/Recent";
import Posting from "./pages/Posting";
import LoginModal from "./components/modal/login/loginModal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Headroom
          style={{
            webkitTransition: "all 0.8s ease-in-out",
            mozTransition: "all 0.8s ease-in-out",
            oTransition: "all 0.8s ease-in-out",
            transition: "all 0.8s ease-in-out",
          }}
        >
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
