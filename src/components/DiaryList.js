import React, { useCallback, useEffect, useState } from "react";
import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";
import EmotionItem from "./EmotionItem";
import { emotion_filterlist } from "../util/emotion_filterlist";
//정렬기능메뉴 컨포넌트
//최신순, 오래된순
const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const ControlMenu = React.memo(({ value, onChange, optionList }) => {
  return (
    <select
      className="ControlMenu"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map(
        //목록표 나열
        (
          it,
          idx // sortOptionList(목록표)의 객체를 한개씩 꺼내옴
        ) => (
          <option key={idx} value={it.value}>
            {it.name}
          </option>
        )
      )}
    </select>
  );
});

const DiaryList = ({ diaryList }) => {
  const navigate = useNavigate();
  //리스트 한개씩 꺼내기

  const [sortType, setSortType] = useState("latest");
  const [emotionFilter, setEmotionFilter] = useState(1); //"all_emotion"

  //깊은 복사를 통해 정렬리스트 반환 함수
  const getProcessedDiaryList = () => {
    const filterCallBack = (item) => {
      if (emotionFilter === 2) {
        //"good";
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };
    //최신순 비교함수
    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    const copyList = JSON.parse(JSON.stringify(diaryList)); //깊은복사(문자열로 반환후 배열로 복화한 후 저장)

    //감정분류

    const filteredList =
      emotionFilter === 1 //"all_emotion"
        ? copyList
        : copyList.filter((it) => filterCallBack(it));

    const sortedList = filteredList.sort(compare); //함수를 인자로 받는다
    return sortedList;
  };

  return (
    <div className="DiaryList">
      <div className="diarylist_add">
        <MyButton
          type={"positive"}
          text={" + "}
          onClick={() => navigate("/new")}
        />
      </div>
      <div className="diarylist_sort_menu">
        <div className="diarylist_sort_time">
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
        </div>
        <div className="emotion_filter_wrapper">
          {emotion_filterlist.map((it) => (
            <EmotionItem
              key={it.emotion_id}
              {...it}
              onClick={setEmotionFilter}
              isSelected={it.emotion_id === emotionFilter}
            />
          ))}
        </div>
      </div>
      {getProcessedDiaryList().map((it) => (
        <DiaryItem key={it.emotion_id} {...it} />
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};
export default DiaryList;
