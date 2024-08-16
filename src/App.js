import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import "./App.css";
import { initVh } from "../src/utils/setVh";
import React, { useEffect } from "react";
import QR from "./pages/QR/QR.jsx";
import Quiz from "./pages/Quiz/Quiz.jsx";
import Roulette from "./pages/Roulette/Roulette.jsx";
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
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Roulette" element={<Roulette />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
