import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AppWrapper } from "../../wrapper";
import "./ContactUs.scss";

const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ezsl09b",
        "template_3iwy4nb",
        form.current,
        "7VpnH1_WBnOvLHrt2"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("تم إرسال رسالتك بنجاح, سنرد عليك في اسرع وقت");
        },
        (error) => {
          console.log(error.text);
          alert("يوجد خطأ في إرسال الرسالة, حاول في وقت لاحق");
        }
      );
    e.target.reset();
  };
  return (
    <div className="app__contact-us section__padding section__margin">
      <h1 className="page-title">تواصل معنا</h1>
      <div className="app__contact-us-container">
        <div className="app__contact-us-form">
          <h2 className="app__contact-us-form-title">ارسل لنا رسالة</h2>
          <form ref={form} onSubmit={sendEmail} className="contact-us-form">
            <input type="text" placeholder="اسمك" name="user_name" required />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              name="user_email"
              required
            />
            <input type="text" placeholder="الموضوع" name="subject" required />
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="اكتب رسالتك"
            ></textarea>
            <button type="submit">إرسل رسالتك</button>
          </form>
        </div>
        <div className="app__contact-us-map">
          <iframe
            className="google-map-location"
            title="google-map-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2458.1704559455675!2d31.15804631040457!3d29.388496391408385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145996b2e596fb31%3A0x4e40510ec2a57ea3!2z2YfYsdmFINmF2YrYr9mI2YU!5e0!3m2!1sar!2seg!4v1664367627522!5m2!1sar!2seg"
            // width="600"
            // height="450"
            style={{ border: 0 }}
            // allowfullscreen=""
            allowFullScreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AppWrapper(ContactUs);
