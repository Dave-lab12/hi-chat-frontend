import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../SocketContext";
import ModalInvite from "./modalInvite";
import styles from "./videoplayer.module.css";
import { Modal, Button, Space } from "antd";
import { FcInfo } from "react-icons/fc";
import Notification from "./notification";

function VideoPlayer({ children }) {
  const [copied, setCopied] = useState(false);
  const {
    name,
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    call,
    me,
    stream,
  } = useContext(SocketContext);
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
              <h1>Hi, {name.toUpperCase() || "Name"}!</h1>
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
                {/* <h1>{call.name || "Name"}</h1> */}
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
