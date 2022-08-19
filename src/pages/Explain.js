import { useNavigate } from "react-router";
import Mosimi from "../components/Mosimi";
import MyButton from "../components/MyButton";
import Text from "../components/Text";

const Explain = () => {
  const navigate = useNavigate();
  return (
    <div className="Explain">
      <Text textType="summary" text=" AI 챗봇 –채팅 심리 치료 상담 어플" />
      <Text textType="Title" text="모두의 심리" />

      <div className="explains">
        <Text
          textType="explain_1"
          text="1. AI 챗봇 모심이와 함께 대화를 해보세요."
        />
        <Text textType="explain_2" text="2. 나의 상태를 분석할 수 있어요." />
        <Text
          textType="explain_3"
          text="3. 매일 귀여운 스티커와 함께  나의 감정을 기록해보세요."
        />
        <Text
          textType="explain_4"
          text="4. 지칠때는 명상, ASMR, 요가 등 여러 활동을 통해 기분을 올려봐요."
        />
        <Text
          textType="explain_5"
          text="5. 주변 상담소 또는 기관을 추천해줘요."
        />
        <Mosimi type="explain" src="../logo/mosimi_explain.png" />
      </div>

      <MyButton text={"이해했어요!"} onClick={() => navigate(`/login`)} />
    </div>
  );
};
export default Explain;
