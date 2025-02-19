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
          Redash will be deprecated by {' '}<strong>June 2025.</strong>Creation of new dashboards has been disabled, and creation of alerts/queries will be disabled soon. Please migrate your assets to <strong>Careem Insights</strong> and for more queries: Please reach out to us on Slack at{' '}
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