import React from "react";
import "./LostPlus.css";
import Background from "../../components/Background/Background";
import { Link } from "react-router-dom";
const LostPlus = () => {
  const Spacer = () => {
    return <div style={{ height: "20%", width: "60px" }} />;
  };
  return (
    <div>
      <Background />
      <div className="lp_header">
        <div className="lp-header-left">
          <Link to="/lost" style={{ color: "white", textDecoration: "none" }}>
            &lt;
          </Link>
        </div>
        <div className="lp-header-mid">분실물 추가</div>
        <div className="header-right">
          <Spacer />
        </div>
      </div>
      <div className="LP-wrapper">
        <h2>분실물 이름</h2>
        <input type="text" placeholder="분실물 이름을 입력하세요" />
        <h2>발견 위치</h2>
        <input type="text" placeholder="발견 위치를 입력해주세요" />

        <h2>이미지 추가</h2>
        <input type="file" placeholder="파일 선택" />
        <button className="pluss-button">추가 하기</button>
      </div>
    </div>
  );
};

export default LostPlus;
