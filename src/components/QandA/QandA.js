import React, { useState } from "react";
import { AppWrapper } from "../../wrapper";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./QandA.scss";

const data = [
  {
    question: "هل تقومون بشحن الأثاث ؟",
    answer:
      "نعم نقوم بشحن جميع أنواع الأثاث المنزلي من الأمارات إلى أي مكان في مصر، وذلك بعد حجز موعد معنا عبر موقعنا أو من خلال التواصل معنا على الهاتف، يقوم فريقنا المختص بالتواصل معك والتوجه إليك لتفكيك وتغليف الأثاث وتجهيزة للشحن.",
  },
  {
    question: "ما هي المدة المستغرقة لوصول شحنتي؟",
    answer:
      "يعتمد الأمر على نوع الشحنة وحجمها ونوع الشحن، هل هو بري أم بحري أم جوي، وكذلك يعتمد على المكان المرسلة إليه الشحنة في مصر، ومع ذلك بعد أستلامنا للشحنة ومعرفة كافة التفاصيل حول شحنتك نقوم بتقدير المدة المستغرقة لوصول الشحنة، وأضافة لهذا يمكنك دائمًا تتبع وجهة شحنتك وإلى أين وصلت بشكل مجاني عبر موقعنا.",
  },
  {
    question: "أعيش في مصر، هل يمكنكم شرء بعض الأشياء لي وشحنها؟",
    answer:
      "لا مشكلة لدينا في ذلك ولكن هذه الخدمة نعمل بها ضمن أطار خاص نظرًا لصعوبة دخول بعض البضائع جمركيًا بكميات أكثر من الكميات المحددة للأستخدام الشخصي.",
  },
  {
    question: "ماذا يمكنني أن أفعل أذا لم تصل شحنتي؟",
    answer:
      "يمكنك دائمًا متابعة شحنتك عبر موقعنا لتعلم إلى أين وصلت، وأذا وجدت أن حالة الشحنة في الموقع تم التسليم وهي لم تصل بعد يمكنك الأنتظار من 6 الى 12 ساعة والعودة مجددًا للتأكد من الحالة، أن كانت المشكلة ما تزال قائمة يمكنك التواصل مع الدعم وسيعمل على حل المشكلة في أسرع وقت.",
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
