import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../SocketContext";
import { FiEdit3 } from "react-icons/fi";

import styles from "./videoplayer.module.css";
import { Modal } from "antd";
import { FcInfo } from "react-icons/fc";
import Notification from "./notification";

function VideoPlayer({ children, setEditName }) {
  const [copied, setCopied] = useState(false);
  const { name, callAccepted, myVideo, userVideo, callEnded, me, stream } =
    useContext(SocketContext);
  const Name = localStorage.getItem("user name") || name;

  const showInvitation = () => {
    const { confirm } = Modal;
    confirm({
      title: "Your invitation code",
      icon: <FcInfo />,
      content: `your invitation code is ${me}`,
      onOk() {
        navigator.clipboard.writeText(me);
        setCopied(true);
      },
      onCancel() {},
    });
  };
  useEffect(() => {
    setInterval(() => {
      setCopied(false);
    }, 500);
  }, []);

  return (
    <>
      {stream && (
        <header>
          <div className={styles.container}>
            <div className={styles.title}>
              <h1>Hi, {Name.toUpperCase() || "Guest"}!</h1>
              <FiEdit3
                className={styles.editNameIco}
                onClick={() => setEditName(true)}
              />
            </div>
            <button className={styles.invite} onClick={() => showInvitation()}>
              Invite Others
            </button>
            {copied && <Notification type="success" />}
          </div>
          {children}
          <section
            className={`${styles.commonVideo} ${
              callAccepted && !callEnded ? styles.groupContainer : ""
            }`}
          >
            <video
              className={`${styles.player} ${
                callAccepted && !callEnded ? styles.commonVideo : ""
              }`}
              playsInline
              muted
              ref={myVideo}
              autoPlay
            />
            {callAccepted && !callEnded && (
              <div className={styles.otherUsers}>
                <video
                  className={`${styles.commonVideo}`}
                  playsInline
                  ref={userVideo}
                  autoPlay
                />
              </div>
            )}
          </section>
        </header>
      )}
    </>
  );
}

export default VideoPlayer;
