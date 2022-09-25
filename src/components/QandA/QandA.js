import React, { useState } from "react";
import { AppWrapper } from "../../wrapper";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./QandA.scss";

const data = [
  {
    question: "السؤال رقم 1",
    answer:
      'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد',
  },
  {
    question: "السؤال رقم 2",
    answer:
      'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد',
  },
  {
    question: "السؤال رقم 3",
    answer:
      'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد',
  },
  {
    question: "السؤال رقم 4",
    answer:
      'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد',
  },
];

const QandA = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <>
      <div className="section__heading">
        <h2>الأسئلة الشائعة</h2>
      </div>
      <div className="wrapper">
        <div className="accordion">
          {data.map((item, index) => (
            <div key={item.question} className="accordion-item">
              <div className="title" onClick={() => toggle(index)}>
                <h2>{item.question}</h2>
                <span>
                  {selected === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </span>
              </div>
              <div className={selected === index ? "content show" : "content"}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrapper(QandA);
