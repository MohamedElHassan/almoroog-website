import React from "react";
import { Feature } from "../../components";
import images from "../../images";

import { AppWrapper } from "../../wrapper";
import "./ServicesPage.scss";

const ServicesPage = () => {
  return (
    <div className="section__padding section__margin">
      <h2 className="page-title">الخدمات</h2>

      <div className="app__services-page">
        <div className="app__services-page-section1">
          <div className="app__services-page-content">
            <Feature
              number="1"
              title="خدمات حصرية مميزة"
              content='هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي'
            />
            <Feature
              number="2"
              title="خدمات حصرية مميزة"
              content='هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي'
            />
            <Feature
              number="3"
              title="خدمات حصرية مميزة"
              content='هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي'
            />
          </div>
          <div className="feature-img">
            <img src={images.vertical1} alt="feature-img" />
          </div>
        </div>

        <div className="app__services-page-section2">
          <div className="app__services-page-content">
            <Feature
              number="4"
              title="خدمات حصرية مميزة"
              content='هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي'
            />
            <Feature
              number="5"
              title="خدمات حصرية مميزة"
              content='هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي'
            />
            <Feature
              number="6"
              title="خدمات حصرية مميزة"
              content='هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي'
            />
          </div>
          <div className="feature-img">
            <img className="contain-img" src={images.vertical2} alt="feature-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWrapper(ServicesPage);
