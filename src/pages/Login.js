import { useEffect } from "react";
import { useNavigate } from "react-router";
import MyButton from "../components/MyButton";
import Text from "../components/Text";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="Login">
      <Text textType="Title" text={"모두의 심리"} />
      <h3>
        회원 가입 페이지입니다. <br></br>당신의 대해 알려주세요.
      </h3>
      <div className="Login_info">
        <img
          className="LoginPicture"
          src="../login_profile/ProfileIcon.png"
        ></img>
        <form>
          <p>
            아이디 :<br></br>
            <input
              type="email"
              id="Email"
              className="Login_info_Email"
              placeholder="email.naver.com"
            ></input>
          </p>
          <p>
            비밀번호 :<br></br>
            <input
              type="password"
              id="Password"
              className="Login_info_Password"
              minLength={8}
              maxLength={12}
              placeholder="비밀번호(8~12자리)"
            ></input>
          </p>

          <input
            className="InfoSubmit"
            type={"submit"}
            value="로그인"
            onClick={() => navigate(`/home`)}
          ></input>
        </form>
        <div className="Social_login">
          <div className="SocialDescript">
            SNS 계정으로 로그인<p>3초 안에 회원가입/로그인 하세요</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
