import React, { useState, useRef } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import "./QandA.scss";

const QandA = () => {
  const [toggleQuestion, setToggleQuestion] = useState("");
  const [toggleQuestion2, setToggleQuestion2] = useState("");

  return (
    <div className="app__qanda">
      <div className="app__qanda-container">
        <div
          onClick={() => {
            toggleQuestion === "active"
              ? setToggleQuestion("")
              : setToggleQuestion("active");
          }}
          className={`app__qanda-question ${toggleQuestion}`}
        >
          <h2>كم وقت ياخذ شحن الاُثاث</h2>
          <AiOutlineArrowDown className={`${toggleQuestion}`} />
          {/* {toggleQuestion === "active" ? (
            <AiOutlineArrowDown />
          ) : (
            <AiOutlineArrowUp />
          )} */}
        </div>
        <div className={`app__qanda-answer ${toggleQuestion}`}>
          <p>
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي
            توزيعاَ طبيعياَ
          </p>
        </div>
      </div>
      <div className="app__qanda-container">
        <div
          onClick={() => {
            toggleQuestion2 === "active"
              ? setToggleQuestion2("")
              : setToggleQuestion2("active");
          }}
          className={`app__qanda-question ${toggleQuestion2}`}
        >
          <h2>كم وقت ياخذ شحن الاُثاث</h2>
          <AiOutlineArrowDown className={`${toggleQuestion2}`} />
          {/* {toggleQuestion2 === "active" ? (
            <AiOutlineArrowDown />
          ) : (
            <AiOutlineArrowUp />
          )} */}
        </div>
        <div className={`app__qanda-answer ${toggleQuestion2}`}>
          <p>
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي
            توزيعاَ طبيعياَ
          </p>
        </div>
      </div>
    </div>
  );
};

export default QandA;
