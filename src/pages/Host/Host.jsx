import React from "react";
import Backgroud from "../../components/Background/Background";
import "./Host.css";
import treasure from "../../assets/images/treasure.png";
import Lost from "../../assets/images/Lost.png";
import Info from "../../assets/images/Info.png";
import { Link } from "react-router-dom";
const Host = () => {
  return (
    <div>
      <Backgroud />
      <div className="Host_wrapper">
        <div className="Host_header">관리자 모드</div>

        <div className="Host_middle">
          <div className="mid-all">
            <div className="mid1">
              <div className="mid-left">
                {" "}
                <img className="tr" src={treasure} alt="보물상자" />
                보물 찾기
              </div>
              <div className="mid-right">
                <div className="right-left">
                  <span>{0}</span>
                  <span>/</span>
                  <span>{8}</span>
                </div>
                <Link to="/fotune" className="right-right">
                  <span className="row">&gt;</span>
                </Link>
              </div>
            </div>
            <div className="mid1">
              <div className="mid-left">
                {" "}
                <img className="lost" src={Lost} alt="분실물" />
                분실물
              </div>
              <div className="mid-right">
                <div className="right-left">
                  <span>{10}</span>
                </div>
                <Link to="/lost" className="right-right">
                  <span className="row">&gt;</span>
                </Link>
              </div>
            </div>
            <div className="mid1">
              <div className="mid-left">
                {" "}
                <img className="info" src={Info} alt="공지사항" />
                공지사항
              </div>
              <div className="mid-right">
                <div className="right-left">
                  <span>{10}</span>
                </div>
                <Link to="/info" div className="right-right">
                  <span className="span_row">&gt;</span>
                </Link>
              </div>
            </div>
          </div>
          <input className="LogOut_button" type="submit" value="로그아웃" />
        </div>
      </div>
    </div>
  );
};

export default Host;
