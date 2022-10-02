import React from "react";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";

import "./WhatsAppBtn.scss";

const WhatsAppBtn = () => {
  return (
    <>
      <motion.a
        className="whatsapp-btn"
        href="https://api.whatsapp.com/send?phone=+971582881365"
      >
        <BsWhatsapp />
      </motion.a>
    </>
  );
};

export default WhatsAppBtn;
