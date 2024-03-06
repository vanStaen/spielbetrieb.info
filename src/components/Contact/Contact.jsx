import React, { useState } from "react";
import { Tooltip } from "antd";

import emailLogo from "../../img/logos/emailLogo.png";

import "./Contact.less";

export const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mail@liro.berlin");
    setIsCopied(true);
  };

  return (
    <div className="contact" onClick={copyEmail}>
      <Tooltip title={isCopied ? "Kopiert!" : "Kopieren?"}>
        <img src={emailLogo} className="contact__logo" />{" "}
        <span className="contact__email">m a i l @ l i r o . b e r l i n</span>
      </Tooltip>
    </div>
  );
};
