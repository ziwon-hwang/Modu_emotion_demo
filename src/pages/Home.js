import { useNavigate } from "react-router";
import Mosimi from "../components/Mosimi";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import Text from "../components/Text";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <div className="Menu_header">
        <MyHeader
          type={"Settings"}
          leftChild={<img src="../Setting_img/BackButton.png"></img>}
          rightChild={<img src="../Setting_img/settings.png"></img>}
        />
      </div>
      <div className="Menu">
        <div className="MenuButton">
          <MyButton text={"주변 기관 지도"} type={"left"} />
          <MyButton text={"심리 상태 분석"} type={"right"} />
          <MyButton text={"자가 진단"} type={"left"} />
          <MyButton
            text={"감정일기"}
            type={"right"}
            onClick={() => navigate(`/diary_home`)}
          />
          <MyButton text={"ASMR"} type={"left"} />
        </div>
        <Mosimi className={"home"} src={"../logo/mosimi_home.png"} />
        <Text
          text={"탭하여 모심이와 채팅을 시작해주세요!"}
          textType={"home_description"}
        />
      </div>
    </div>
  );
};
export default Home;
