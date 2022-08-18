import { useNavigate } from "react-router";
import Text from "../components/Text";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="logo" onClick={() => navigate(`/explain`)}>
      <Text
        textType="subTitle"
        text={"대화가 필요한 모든 순간 당신 곁에"}
        onClick={() => navigate(`/home`)}
      />
      <Text textType="Title" text={"모두의 심리"} />
      <img className="logo_mosim" src="../logo/modu_chatbot_logo.png"></img>
    </div>
  );
};
export default Landing;
