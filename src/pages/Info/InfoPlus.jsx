import React from "react";
import "./InfoPlus.css";
import Background from "../../components/Background/Background";
import { Link } from "react-router-dom";

const InfoPlus = () => {
  const Spacer = () => {
    return <div style={{ height: "20%", width: "60px" }} />;
  };
  return (
    <div>
      <Background />
      <div>
        <div className="Ip_header">
          <div className="Ip-header-left">
            <Link to="/info" style={{ color: "white", textDecoration: "none" }}>
              &lt;
            </Link>
          </div>
          <div className="Ip-header-mid">공지사항 추가</div>
          <div className="Ip-header-right">
            <Spacer />
          </div>
        </div>
        <div className="IP-wrapper">
          <h2>제목</h2>
          <input type="text" placeholder="공지사항 제목을 입력하세요." />

          <h2>본문</h2>
          <textarea placeholder="본문 내용을 입력하세요."></textarea>

          <button className="IpPlus-button">추가 하기</button>
        </div>
      </div>
    </div>
  );
};

export default InfoPlus;
