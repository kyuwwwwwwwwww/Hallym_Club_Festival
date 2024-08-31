import React from "react";
import "./Lost.css";
import Background from "../../components/Background/Background";
import Lost1 from "../../assets/images/Lost1.png";
import LostPlus from "../../assets/images/Plus.png";
import { Link } from "react-router-dom";

const Lost = () => {
  const Spacer = () => {
    return <div style={{ height: "20%", width: "60px" }} />;
  };

  return (
    <div>
      <Background />
      <div className="lost_header">
        <div className="header-left">
          <Link to="/host" style={{ color: "white", textDecoration: "none" }}>
            &lt;
          </Link>
        </div>
        <div className="lost-header-mid">분실물 찾기</div>
        <div className="header-right">
          <Spacer />
        </div>
      </div>
      <div className="Lost_wrapper">
        <div className="Lost_box">
          <img className="Lost1" src={Lost1} alt="분실물 1" />
          <div className="text">
            <p>에어팟 맥스</p>
            <p>CLC 계단 밑</p>
          </div>
        </div>
        <div className="Lost_box">
          <img className="Lost1" src={Lost1} alt="분실물 1" />
          <div className="text">
            <p>에어팟 맥스</p>
            <p>CLC 계단 밑</p>
          </div>
        </div>
        <div className="Lost_box">
          <img className="Lost1" src={Lost1} alt="분실물 1" />
          <div className="text">
            <p>에어팟 맥스</p>
            <p>CLC 계단 밑</p>
          </div>
        </div>
        <div className="Lost_box">
          <img className="Lost1" src={Lost1} alt="분실물 1" />
          <div className="text">
            <p>에어팟 맥스</p>
            <p>CLC 계단 밑</p>
          </div>
        </div>
        <div className="Lost_box">
          <img className="Lost1" src={Lost1} alt="분실물 1" />
          <div className="text">
            <p>에어팟 맥스</p>
            <p>CLC 계단 밑</p>
          </div>
        </div>
        <div className="Lost_box">
          <img className="Lost1" src={Lost1} alt="분실물 1" />
          <div className="text">
            <p>에어팟 맥스</p>
            <p>CLC 계단 밑</p>
          </div>
        </div>

        <div className="Lost_box">
          <img className="Lost1" src={Lost1} alt="분실물 1" />
          <div className="text">
            <p>에어팟 맥스</p>
            <p>CLC 계단 밑</p>
          </div>
        </div>

        <div className="Lost_plus">
          <Link to="/lostplus">
            <img className="LostPlus" src={LostPlus} alt="분실물 추가" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lost;
