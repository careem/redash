import React, { useState, useEffect } from "react";
import ExclamationCircleFilled from "@ant-design/icons/ExclamationCircleFilled";
import CloseOutlined from "@ant-design/icons/CloseOutlined";

import "./index.less";

function DeprecationBanner() {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const dismissedTimestamp = localStorage.getItem('banner_dismissed');
    if (dismissedTimestamp) {
      const dismissedDate = new Date(parseInt(dismissedTimestamp, 10));
      const currentDate = new Date();
      if (dismissedDate.toDateString() === currentDate.toDateString()) {
        setShowBanner(false);
      }
    }
  }, []);

  const handleDismiss = () => {
    const currentTimestamp = new Date().getTime();
    localStorage.setItem('banner_dismissed', currentTimestamp.toString());
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="deprecation-banner">
      <div className="banner-content">
        <ExclamationCircleFilled className="warning-icon" />
        <div className="banner-text">
          Redash will be deprecated by {' '}<strong>June 2025.</strong>
          For more queries and support, please connect with us on slack at{' '}
          <span className="support-channel">#careem-insights-support</span>
        </div>
      </div>
      <CloseOutlined
        className="close-button"
        onClick={handleDismiss}
      />
    </div>
  );
}

export default DeprecationBanner;