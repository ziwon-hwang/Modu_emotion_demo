import MyButton from "./MyButton";
import MyHeader from "./MyHeader";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useContext, useEffect, useCallback } from "react";
import EmotionItem from "./EmotionItem";
import { DiaryDispatchContext } from "./../App.js";
import { getStringDate } from "../util/date.js";
import { emotionList } from "../util/emotion.js";

//선택한 다이어리를 가져온다(수정하기위해)
const DiaryEditor = ({ isEdit, originData }) => {
  const contentRef = useRef();
  const [content, setContent] = useState("");
  const [emotion, setEmotion] = useState(3);
  const [date, setDate] = useState(""); //useState(getStringDate(new Date()))

  //페이지 뒤로가기와 이동을 위한 객체
  const navigate = useNavigate();

  //함수가져오기
  const { onCreate, onEdit } = useContext(DiaryDispatchContext);

  const handleClickEmote = useCallback((emotion) => {
    setEmotion(emotion);
  }, []);

  function handleSubmit() {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    if (
      window.confirm(
        isEdit ? "일기를 수정하시겠습니까?" : "새로운 일기를 작성하시겠습니까?"
      )
    ) {
      //새로운 일기를 작성하는경우(!수정)
      if (!isEdit) {
        onCreate(date, content, emotion);
      } else {
        //수정일때
        onEdit(originData.id, date, content, emotion);
      }
      navigate("/diary_home", { replace: true });
    }
  }

  //전에 작성했을때의 상태를 보여준다(날짜, 감정이모지,일기콘텐트)
  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date)))); //수정전 날짜->수정후 날짜
      setEmotion(originData.emotion); //수정전 감정이모지->수정후 감정이모지
      setContent(originData.content); //수정전 일기->수정후 감정이모지
    } else {
      setDate(getStringDate(new Date()));
    }
  }, [isEdit, originData]);

  return (
    <div className="DiaryEditor">
      <MyHeader
        headText={isEdit ? "일기 수정하기" : "새 일기쓰기"}
        leftChild={
          <MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />
        }
        rightChild={
          isEdit ? (
            <MyButton
              text={"수정완료"}
              type={"positive"}
              onClick={handleSubmit}
            />
          ) : (
            <MyButton
              text={"작성완료"}
              type={"positive"}
              onClick={handleSubmit}
            />
          )
        }
      />
      <div>
        {/* 날짜 */}
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input_box"> </div>
          <input
            className="input_date"
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          ></input>
        </section>
        {/* 감정 */}
        <section>
          <h4>오늘의 감정</h4>
          <div className="input_box emotion_list_wrapper">
            {emotionList.map((it) => (
              <EmotionItem
                key={it.emotion_id}
                {...it}
                onClick={handleClickEmote}
                isSelected={it.emotion_id === emotion}
              />
            ))}
          </div>
        </section>
        {/* 오늘의 일기 */}
        <section>
          <h4>오늘의 일기</h4>
          <div className="input_box text_wrapper">
            <textarea
              ref={contentRef}
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              placeholder="오늘은 어땠나요?"
            ></textarea>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
