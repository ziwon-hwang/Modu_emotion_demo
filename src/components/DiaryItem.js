import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";
import { React, useContext } from "react";
import { DiaryDispatchContext } from "./../App.js";
const DiaryItem = ({ id, emotion, content, date }) => {
  const { onRemove } = useContext(DiaryDispatchContext);
  const handleRemove = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onRemove(id);
      navigate("/diary_home", { replace: true });
    }
  };

  const strDate = new Date(parseInt(date)).toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
  });
  const strweekday = new Date(parseInt(date)).toLocaleDateString("ko-KR", {
    weekday: "long",
  });
  const navigate = useNavigate();

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  return (
    <div className="DiaryItem">
      <div className="diary_content_menu">
        <div
          onClick={goEdit}
          className={[
            "emotion_img_wrapper",
            `emotion_img_wrapper_${emotion}`,
          ].join(" ")}
        >
          <img
            src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`}
          ></img>
        </div>
        <div className="info_wrapper" onClick={goEdit}>
          <div className="diary_date">{strDate}</div>
          <div className="diary_weekday">{strweekday}</div>
        </div>
        <div className="btn_wrapper">
          <MyButton text={" x "} type={"negative"} onClick={handleRemove} />
        </div>
      </div>
      <div className="diary_content_preview">{content.slice(0, 25)}</div>
    </div>
  );
};
export default DiaryItem;
