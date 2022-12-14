import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { AppWrapper } from "../../wrapper";
import "./ContactForm.scss";

const ContactForm = () => {
  const [fromSubmitted, setFromSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_ezsl09b",
        "template_4xpbsp8",
        form.current,
        "7VpnH1_WBnOvLHrt2"
      )
      .then(
        (result) => {
          setLoading(false);
          setFromSubmitted(true);
        },
        (error) => {
          setLoading(false);
          alert("يوجد خطأ في إرسال الرسالة, حاول في وقت لاحق");
        }
      );
    e.target.reset();
  };
  return (
    <>
      <div className="section__heading">
        <h2>تواصل معنا</h2>
      </div>
      {fromSubmitted ? (
        <h2 className="message-sent">
          تم إرسال رسالتك بنجاح, سوف نرد عليك في اسرع وقت
        </h2>
      ) : (
        <div className="app__contact-form">
          <div className="app__contact-form-form">
            <h2 className="app__contact-form-form-title">أرسل طلب شحن</h2>
            <form ref={form} onSubmit={sendEmail} className="contact-us-form">
              <div className="inputBox">
                <input
                  type="text"
                  // placeholder="رقم الجوال"
                  name="user_phone"
                  required
                />
                <span>رقم الجوال</span>
              </div>

              <div className="inputBox">
                <input
                  type="text"
                  // placeholder="نوع الشحنة"
                  name="cargo_type"
                  required
                />
                <span>نوع الشحنة</span>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  // placeholder="عنوان إستلام الشحنة"
                  name="cargo_receive_location"
                  required
                />
                <span>عنوان إستلام الشحنة</span>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  // placeholder="عنوان تسليم الشحنة"
                  name="cargo_send_location"
                  required
                />
                <span>عنوان تسليم الشحنة</span>
              </div>
              <button type="submit">
                {loading ? "جاري الإرسال" : "أرسل الطلب"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AppWrapper(ContactForm);
