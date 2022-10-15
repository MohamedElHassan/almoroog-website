import React from "react";
import { GiCardPickup, GiCargoShip, GiStorkDelivery } from "react-icons/gi";
import { FaRegHandPointUp, FaTruck } from "react-icons/fa";

import { AppWrapper } from "../../wrapper";
import images from "../../images";
import "./Pros.scss";
const Pros = () => {
  return (
    <div className="app__pros section__margin">
      <div className="app__pros-features">
        <div className="app__pros-feature">
          <div className="icon">
            <FaRegHandPointUp />
          </div>
          <h3>إتصل بنا</h3>
          <p>أحجز موعد معنا</p>
        </div>

        <div className="app__pros-feature">
          <div className="icon">
            <GiCardPickup />
          </div>
          <h3>نستلم</h3>
          <p>نستلم شحنتك أينما كنت في الإمارات</p>
        </div>

        <div className="app__pros-feature">
          <div className="icon">
            <FaTruck />
          </div>
          <h3>نشحن</h3>
          <p>كن على علم بكل خطوة</p>
        </div>

        <div className="app__pros-feature">
          <div className="icon">
            <img src={images.iconDelivery} alt="delivery-icon" />
          </div>
          <h3>نسلم</h3>
          <p>لا تفوت لحظة</p>
        </div>
      </div>
      <div className="app__pros-description">
        <div className="app__pros-text1">
          <span className="circle">01</span>
          <p>
            يمكنك الإتصال بنا لحجز موعد لإستلام شحنتك عبر رقمنا الموحد
            0555019360
          </p>
        </div>

        <div className="app__pros-text2">
          <span className="circle">02</span>
          <p>
            بعد الحجز ، سيتصل بك فريقنا المختص في غضون ساعات لترتيب موعد لإستلام
            الشحنة!
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
            بمجرد تسليم الشحنة الى احبائك ، لا تفوت رؤية ابتسامتهم السعيدة. اطلب
            منهم إرسال صورة ثم شاركها معنا، نحن متحمسون لرؤيتها أيضًا.
          </p>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="app__pros-features-s">
        <div className="app__pros-feature-s">
          <h3>إتصل بنا</h3>
          <div className="feature-icons">
            <span className="circle">01</span>
            <FaRegHandPointUp />
          </div>
          <p>
            يمكنك الإتصال بنا لحجز موعد لإستلام شحنتك عبر رقمنا الموحد
            0555019360
          </p>
        </div>

        <div className="app__pros-feature-s">
          <h3>نستلم شحنتك</h3>
          <div className="feature-icons">
            <span className="circle">02</span>
            <GiCardPickup />
          </div>
          <p>
            بعد الحجز ، سيتصل بك فريقنا المختص في غضون ساعات لترتيب موعد لإستلام
            الشحنة!
          </p>
        </div>

        <div className="app__pros-feature-s">
          <h3>نغلف ونشحن</h3>
          <div className="feature-icons">
            <span className="circle">03</span>
            <GiCargoShip />
          </div>
          <p>
            لديك الحق في معرفة حالة شحنتك إلى أين وصلت، تحقق من موقعها الحالي
            وتتبعها.
          </p>
        </div>

        <div className="app__pros-feature-s">
          <h3>نسلم شحنتك</h3>
          <div className="feature-icons">
            <span className="circle">04</span>
            <img src={images.iconDeliveryYellow} alt="delivery-icon" />
          </div>
          <p className="no-border">
            بمجرد تسليم الشحنة الى احبائك ، لا تفوت رؤية ابتسامتهم السعيدة. اطلب
            منهم إرسال صورة ثم شاركها معنا، نحن متحمسون لرؤيتها أيضًا.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppWrapper(Pros);
