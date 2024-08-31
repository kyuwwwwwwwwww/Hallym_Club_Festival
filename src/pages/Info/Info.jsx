import React, { useState } from "react";
import "./Info.css";
import Background from "../../components/Background/Background";
import DropdownMenu from "../../pages/DropDownMenu/DropDownMenu";
import { Link } from "react-router-dom";
import InfoPlus from "../../assets/images/Plus2.png";
const Info = () => {
  const Spacer = () => {
    return <div style={{ height: "20%", width: "60px" }} />;
  };
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (index) => {
    setActiveMenu(index === activeMenu ? null : index);
  };

  const handleEdit = (index) => {
    alert(`공지 ${index + 1} 수정`);
    setActiveMenu(null); // 액션 후 메뉴 닫기
  };

  const handleDelete = (index) => {
    alert(`공지 ${index + 1} 삭제`);
    setActiveMenu(null); // 액션 후 메뉴 닫기
  };

  return (
    <div>
      <Background />
      <div className="info_header">
        <div className="header-left">
          <Link to="/host" style={{ color: "white", textDecoration: "none" }}>
            &lt;
          </Link>
        </div>
        <div className="info-header-mid">공지사항</div>
        <div className="info-header-right">
          <Spacer />
        </div>
      </div>
      <div className="Info_wrapper">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <div key={index} className="Info_box">
            공지 {item}
            <div className="menu-icon" onClick={() => handleMenuClick(index)}>
              &#x22EE;
            </div>
            {activeMenu === index && (
              <DropdownMenu
                onEdit={() => handleEdit(index)}
                onDelete={() => handleDelete(index)}
              />
            )}
          </div>
        ))}
        <div className="Info_plus">
          <Link to="/infoplus">
            <img className="InfoPlus" src={InfoPlus} alt="공지사항 추가" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
