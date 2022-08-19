import { async } from "q";
import { useNavigate } from "react-router";
import Mosimi from "../components/Mosimi";
import Text from "../components/Text";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="logo" onClick={() => navigate(`/explain`)}>
      <Text
        textType="subTitle"
        text={"대화가 필요한 모든 순간 당신 곁에"}
        onClick={() => navigate(`/login`)}
      />
      <Text textType="Title" text={"모두의 심리"} />
      <Mosimi type="landing" src="../logo/mosimi_landing.png" />
    </div>
  );
};
export default Landing;
