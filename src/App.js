import { Route, Routes } from "react-router-dom";
import "./App.css";
import { initVh } from "../src/utils/setVh";
import React, { useEffect } from "react";
import QR from "./pages/QR/QR.jsx";
import Login from "./pages/Login/Login.jsx";
import Host from "./pages/Host/Host.jsx";
import Info from "./pages/Info/Info.jsx";
import Fotune from "./pages/Fotune/Fotune.jsx";
import Lost from "./pages/Lost/Lost.jsx";
import LostPlus from "./pages/Lost/LostPlus.jsx";
import InfoPlus from "./pages/Info/InfoPlus.jsx";

function App() {
  useEffect(() => {
    const cleanup = initVh(); //initVh() cleanup에 대입
    return cleanup;
  }, []);
  return (
    <>
      <QR />

      <div className="phone_size">
        <Routes>
          <Route path="/" exact={true} element={<Login />} />
          <Route path="/host" element={<Host />} />
          <Route path="/info" element={<Info />} />
          <Route path="/lost" element={<Lost />} />
          <Route path="/fotune" element={<Fotune />} />
          <Route path="/lostplus" element={<LostPlus />} />
          <Route path="/infoplus" element={<InfoPlus />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
