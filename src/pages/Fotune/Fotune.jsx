import React, { useState } from "react";
import "./Fotune.css";
import Background from "../../components/Background/Background";
import Hello from "../../assets/images/Hello.png";
import Nemo from "../../assets/images/Nemo.png";
import { Link } from "react-router-dom";

const Fotune = () => {
  const Spacer = () => {
    return <div style={{ height: "20%", width: "60px" }} />;
  };

  // f_box6 배경색 상태 관리
  const [isGray, setIsGray] = useState(false);

  // 배경색 변경 함수
  const handleDelete = () => {
    setIsGray(true);
  };
  return (
    <div>
      <Background />
      <div className="fotune_header">
        <div className="header-left">
          <Link to="/host" style={{ color: "white", textDecoration: "none" }}>
            &lt;
          </Link>
        </div>
        <div className="header-mid">보물찾기</div>
        <div className="header-right">
          <Spacer />
        </div>
      </div>
      <div className="fotune_wrapper">
        <div className="f_box">
          <img className="f_img" src={Hello} alt="헬로 베이크샵 이미지" />
          헬로 베이크샵(크랙소금빵 + 아메리카노)
          <button className="delete1">삭제</button>
        </div>
        <div className="f_box2">
          <img className="f_img" src={Hello} alt="헬로 베이크샵 이미지" />
          네모 커피(스콘 + 음료 쿠폰)
          <button className="delete2">삭제</button>
        </div>
        <div className="f_box3">
          <img className="f_img" src={Hello} alt="헬로 베이크샵 이미지" />
          네모 커피(스콘 + 음료 쿠폰)
          <button className="delete3">삭제</button>
        </div>
        <div className="f_box4">
          <img className="f_img" src={Hello} alt="헬로 베이크샵 이미지" />
          네모 커피(스콘 + 음료 쿠폰)
          <button className="delete4">삭제</button>
        </div>
        <div className="f_box5">
          <img className="f_img" src={Hello} alt="헬로 베이크샵 이미지" />
          네모 커피(스콘 + 음료 쿠폰)
          <button className="delete5">삭제</button>
        </div>
        <div
          className="f_box6"
          style={{ backgroundColor: isGray ? "gray" : "purple" }}
        >
          <img className="f_img" src={Nemo} alt="헬로 베이크샵 이미지" />
          네모 커피(스콘 + 음료 쿠폰)
          <button className="delete6" onClick={handleDelete}>
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fotune;
