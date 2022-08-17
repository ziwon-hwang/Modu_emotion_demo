import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";

const Edit = () => {
  const [originData, setOriginData] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext); //다이어리스트 데이터 받아온다

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 - ${id}번 일기 수정`;
  }, []);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      if (targetDiary) {
        //객체면 truthy, undefined이면 falthy
        setOriginData(targetDiary); //originData를 targetDiary로 교체
      } else {
        //9번과 같은 객체(일기리스트)에 없는 일기의 경우 홈으로 보낸다
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]); //id가 변하거나 diaryList가 변할때 콜백함수 실행

  //origindata 가 있으면 DiaryEditor를 렌더
  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  );
};
export default Edit;
