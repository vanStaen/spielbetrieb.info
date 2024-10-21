import React, { useState } from "react";
import { Tooltip } from "antd";

import emailLogo from "../../img/logos/emailLogo.png";

import "./Contact.less";

export const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mail@spielbetrieb.info");
    setIsCopied(true);
  };

  return (
    <div className="contact" onClick={copyEmail}>
      <Tooltip title={isCopied ? "Kopiert!" : "Kopieren?"}>
        <img src={emailLogo} className="contact__logo" />{" "}
        <span className="contact__email">m a i l @ s p i e l b e t r i e b . i n f o</span>
      </Tooltip>
    </div>
  );
};
