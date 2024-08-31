import React, { useState } from "react";
import "./Login.css";
import Id from "../../assets/images/Id.png";
import Pw from "../../assets/images/Pw.png";
import FormLogo from "../../assets/images/FormLogo.png"; // 폼 내 로고 이미지
import Background from "../../components/Background/Background";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../apis/axios";
const Login = () => {
  const [user_id, setUser_id] = useState("");
  const [user_password, setUser_password] = useState("");
  const [error, setError] = useState("");
  const router = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postLogin(user_id, user_password);
      alert("로그인 성공");
      router("/host"); // 로그인 성공 시 추가적인 작업을 수행할 수 있습니다.
    } catch (error) {
      setError(error.response ? error.response.data.message : "로그인 실패");
      console.log(error);
    }
  };

  return (
    <div>
      <Background />
      <div className="Login-container">
        <form className="Login_form" onSubmit={handleSubmit}>
          <img className="Form-logo" src={FormLogo} alt="폼 로고 이미지" />{" "}
          {/* 폼 로고 */}
          <div className="Login_Id">
            <img className="Id" src={Id} alt="아이디 이미지" />
            <input
              type="text"
              id="id"
              placeholder="아이디를 입력해주세요"
              value={user_id}
              onChange={(e) => setUser_id(e.target.value)}
              required
            />
          </div>
          <div className="Login_Pw">
            <img className="Pw" src={Pw} alt="패스워드 이미지" />
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력해주세요"
              value={user_password}
              onChange={(e) => setUser_password(e.target.value)}
              required
            />
          </div>
          <input className="form_button" type="submit" value="로그인" />
        </form>
        <p className="contact-info">문의 : 010-9249-6760</p> {/* 문의 정보 */}
      </div>
    </div>
  );
};

export default Login;
