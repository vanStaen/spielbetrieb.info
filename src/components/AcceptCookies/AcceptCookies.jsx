import React, { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
import { notification, Button } from "antd";
import { observer } from "mobx-react";

import { pageStore } from "../../store/pageStore/pageStore";

import "./AcceptCookies.less";

export const AcceptCookies = observer(() => {
  const [hasRenderedOnce, setHasRenderedOnce] = useState(false);

  const openAcceptCookie = () => {
    const key = `cookieform${Date.now()}`;
    notification.destroy();
    notification.open({
      message: <AcceptCookieTitle />,
      description: <AcceptCookieDesc key={key} />,
      duration: 0,
      placement: "topRight",
      className: "customNotification",
      key,
    });
  };

  useEffect(() => {
    if (hasRenderedOnce === false) {
      if (!pageStore.allowCookie) {
        openAcceptCookie();
      }
    }
    setHasRenderedOnce(true);
  });
}, []);

const AcceptCookieTitle = () => {
  // const { t } = useTranslation();
  return <>🍪 Diese Website verwendet Cookies.</>;
};

const AcceptCookieDesc = (props) => {
  // const { t } = useTranslation();

  const handleAcceptCookie = () => {
    pageStore.setAllowCookie(true);
    notification.destroy(props.key);
  };

  return (
    <>
      <div className="cookie__desc">
        Wir verwenden Cookies,um den Website-Verkehr zu analysieren und Ihr
        Website-Erlebnis zu optimieren. Wenn Sie unsere Verwendung von Cookies
        akzeptieren, werden Ihre Daten mit allen anderen Benutzerdaten
        zusammengeführt.
      </div>
      <Button className="cookie__button" onClick={() => handleAcceptCookie()}>
        Akzeptieren
      </Button>
    </>
  );
};
