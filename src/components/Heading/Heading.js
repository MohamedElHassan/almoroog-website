import React from "react";
import { AppWrapper } from "../../wrapper";

import "./Heading.scss";

const Heading = () => {
  return (
    
    <div className="app__heading">
      <div className="app__heading-content">
        <h2 className="app__heading-head">خدمات راقية</h2>
        <p>
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
          التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي
        </p>
      </div>
      <div className="app__heading-content">
        <h2 className="app__heading-head">شحن سريع</h2>
        <p>
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
          التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي
        </p>
      </div>
    </div>
  );
};

export default AppWrapper(Heading);
