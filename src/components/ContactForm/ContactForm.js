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
        "template_3iwy4nb",
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
        <div className="app__contact-form section__padding section__margin">
          <div className="app__contact-form-form">
            <h2 className="app__contact-form-form-title">ارسل لنا رسالة</h2>
            <form ref={form} onSubmit={sendEmail} className="contact-us-form">
              <input type="text" placeholder="اسمك" name="user_name" required />
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                name="user_email"
                required
              />
              <input
                type="text"
                placeholder="الموضوع"
                name="subject"
                required
              />
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="اكتب رسالتك"
              ></textarea>
              <button type="submit">
                {loading ? "جاري الإرسال" : "إرسل رسالتك"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AppWrapper(ContactForm);
