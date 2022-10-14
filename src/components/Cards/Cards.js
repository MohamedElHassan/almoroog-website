import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AppWrapper } from "../../wrapper";
import images from "../../images";
import "./Cards.scss";

const cardsData = [
  {
    image: images.card1Two,
    title: "نقدم أضافة",
    content:
      "نعمل في المروج للشحن دائمًا على تقديم أضافة حقيقية وملموسة في خدماتنا لنكون دائمًا سباقين بخطوات عن أقرب المنافسين، ولكذلك قمنا بتطوير وأستخدام أفضل خامات التغليف وأساليب الفك والتغليف والشحن لضمان وصول شحنتك كما سلمتها لنا، وعلى هذا المنوال نطور خدماتنا بأستمرار.",
  },
  {
    image: images.card2Two,
    title: "تتبع شحنتك",
    content:
      "يمكنك دائمًا متابعة شحنتك عبر موقعنا لتعلم إلى أين وصلت بشكل مجاني، وذلك لتوفير تجربة عميل فريدة ونضمن لك الراحة من الأتصال بخدمة العملاء، فقط بضغطة زر يمكنك معرفة إلى أين وصلت شحنتك.",
  },
  {
    image: images.card3Two,
    title: "شحن سريع",
    content:
      "برغم المشاكل الكثيرة التى تواجة الحركة اللوجستية على المستوى العالمي، إلى أننا في المروج نعمل على توفير جميع السبل الممكنة المطلوبة لضمان وصول شحنتك بأسرع وقت ممكن، لتكن على ثقة من أن شحنتك ستصل في الموعد المحدد لها بل في أغلب الأحيان قبل الموعد المحدد.",
  },
  {
    image: images.card4Two,
    title: "فك مجاني",
    content:
      "نقدم خدمة فك الأثاث وما شابة من شحنات تحتاج إلى تفكيك بشكل مجاني تمامًا هذا ما لن تجده عند المنافسين وذلك سعيًا منا لتقديم أفضل خدمة بأعلى جودة وأقل سعر.",
  },
  {
    image: images.card5Two,
    title: "دعم 24 ساعة",
    content:
      "حرصًا منا على جودة خدماتنا  نوفر دعم على مدار الساعة لمتابعة وحل أي مشكلة، سواء كان دعم عبر العاتف بالأتصال برمنا الموحد، أو عبر موقعنا الإلكتروني والسوشيال ميديا الخاصة بنا.",
  },
  {
    image: images.card6,
    title: "تغليف مجاني",
    content:
      "بجانب تقديم خدمة فك الأثاث مجانًا عمل على تقديم خدمة التغليف بشكل مجاني تمامًا وهذا ايضا ما لن تجده عند المنافسين وذلك سعيًا منا لتقديم أفضل خدمة بأعلى جودة وأقل سعر.",
  },
];

const Cards = () => {
  // const [width, setWidth] = useState(0);
  // const carousel = useRef();

  // useEffect(() => {
  //   // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
  //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  // }, []);

  return (
    // <div className="app__cards">
    //   <div className="section__heading">
    //     <h2>لماذا نحن؟</h2>
    //   </div>
    //   <motion.div
    //     ref={carousel}
    //     className="carousel"
    //     whileTap={{ cursor: "grabbing" }}
    //   >
    //     <motion.div
    //       drag="x"
    //       dragConstraints={{ left: 0, right: width }}
    //       className="inner-carousel"
    //     >
    //       {cardsData.map((card) => {
    //         return (
    //           <motion.div className="item" key={card.title}>
    //             <div className="item-content">
    //               <h2>{card.title}</h2>
    //               <p>{card.content}</p>
    //             </div>
    //             <img src={card.image} alt={card.title} />
    //           </motion.div>
    //         );
    //       })}
    //     </motion.div>
    //   </motion.div>
    // </div>

    <div className="app__cards">
      <div className="section__heading">
        <h2>لماذا نحن؟</h2>
      </div>
      <div className="cards-container">
        {cardsData.map((card) => {
          return (
            <div className="item" key={card.title}>
              <div className="item-content">
                <h2>{card.title}</h2>
                <p>{card.content}</p>
              </div>
              <img src={card.image} alt={card.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppWrapper(Cards);
