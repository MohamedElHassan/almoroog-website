import React from "react";
import images from "../../images";
import { AppWrapper } from "../../wrapper";

import "./WhoWeAre.scss";

const WhoWeArePage = () => {
  return (
    <div className="section__padding section__margin">
      <h2 className="page-title">من نحن</h2>
      <div className="app__whoweare">
        <div className="app__whoweare-section1">
          <div className="app__whoweare-section1-img">
            <img src={images.horizontal0} alt="section-img" />
          </div>
          <div className="app__whoweare-section1-content">
            <h2>نتحدى الصعاب</h2>
            <p>
              هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية
              تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى
              النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق
              أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في
              هذا النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت
              على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه
              الحاجة، يقوم مولّدنا هذا باستخدام كلمات من قاموس يحوي
            </p>
          </div>
        </div>

        <div className="app__whoweare-section2">
          <div className="app__whoweare-section2-img">
            <img src={images.horizontal9} alt="section-img" />
          </div>
          <div className="app__whoweare-section2-content">
            <h2>الإتقان في العمل</h2>
            <p>
              هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية
              تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى
              النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق
              أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في
              هذا النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت
              على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه
              الحاجة، يقوم مولّدنا هذا باستخدام كلمات من قاموس يحوي
            </p>
          </div>
        </div>

        <div className="app__whoweare-section3">
          <div className="app__whoweare-section3-img">
            <img src={images.horizontal2} alt="section-img" />
          </div>
          <div className="app__whoweare-section3-content">
            <h2>الماضي العريق للشركة</h2>
            <p>
              هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية
              تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى
              النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق
              أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في
              هذا النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت
              على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه
              الحاجة، يقوم مولّدنا هذا باستخدام كلمات من قاموس يحوي
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWrapper(WhoWeArePage);
