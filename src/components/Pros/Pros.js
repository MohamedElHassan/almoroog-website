import React from "react";
import { GiCardPickup, GiCargoShip, GiStorkDelivery } from "react-icons/gi";
import { FaRegHandPointUp } from "react-icons/fa";

import "./Pros.scss";
import { AppWrapper } from "../../wrapper";
const Pros = () => {
  return (
    <div className="app__pros section__margin">
      <div className="app__pros-features">
        <div className="app__pros-feature">
          <div className="icon">
            <FaRegHandPointUp />
          </div>
          <h3>أحجز</h3>
          <p>أحجز موعد معنا</p>
        </div>

        <div className="app__pros-feature">
          <div className="icon">
            <GiCardPickup />
          </div>
          <h3>نستلم</h3>
          <p>شحنتك تسحتق الأعتناء بها</p>
        </div>

        <div className="app__pros-feature">
          <div className="icon">
            <GiCargoShip />
          </div>
          <h3>نشحن</h3>
          <p>كن على علم بكل خطوة</p>
        </div>

        <div className="app__pros-feature">
          <div className="icon">
            <GiStorkDelivery />
          </div>
          <h3>نسلم</h3>
          <p>لا تفوت لحظة</p>
        </div>
      </div>
      <div className="app__pros-description">
        <div className="app__pros-text1">
        <span className="circle">01</span>
          <p>احجز شحنتك عبر الرقم المجاني</p>
        </div>

        <div className="app__pros-text2">
        <span className="circle">02</span>
          <p>
            بعد الحجز ، سيتصل بك فريقنا في غضون 2-3 أيام لأستلام الشحنة المراد
            إيصالها أظهر معرّفك الساري وادفع!
          </p>
        </div>

        <div className="app__pros-text3">
        <span className="circle">03</span>
          <p>
            لديك الحق في معرفة حالة شحنتك إلى أين وصلت، تحقق من موقعها الحالي
            وتتبعها.
          </p>
        </div>

        <div className="app__pros-text4">
        <span className="circle">04</span>
          <p>
            بمجرد تسليمها ، لا تفوت رؤية ابتسامتهم السعيدة. اطلب منهم إرسال صورة
            ثم شاركها معنا، نحن متحمسون لرؤيتها أيضًا.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppWrapper(Pros);