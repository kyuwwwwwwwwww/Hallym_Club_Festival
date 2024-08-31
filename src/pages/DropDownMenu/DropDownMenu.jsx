import React from "react";
import "./DropDownMenu.css";

const DropdownMenu = ({ onEdit, onDelete }) => {
  return (
    <div className="dropdown-menu">
      <div className="menu-item" onClick={onEdit}>
        수정하기
      </div>
      <div className="menu-item delete" onClick={onDelete}>
        삭제하기
      </div>
    </div>
  );
};

export default DropdownMenu;
