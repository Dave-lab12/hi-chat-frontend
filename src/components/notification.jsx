import React from "react";
import { Button, notification, Space } from "antd";

function Notification({ type }) {
  const openNotificationWithIcon = () => {
    notification[type]({
      message: "Hi chat",
      description: "your invitation code have been copied to clipboard ",
    });
  };
  console.log("hi");
  openNotificationWithIcon(type);
  return <div></div>;
}

export default Notification;
