import React, { useContext, useState } from "react";
import { Button, Input } from "antd";
import { SocketContext } from "../SocketContext";
import {
  BiMicrophone,
  BiMicrophoneOff,
  BiVideo,
  BiVideoOff,
  BiPhoneCall,
} from "react-icons/bi";
import styles from "./controls.module.css";
function Controls() {
  const {
    videoState,
    setVideoState,
    callAccepted,
    leaveCall,
    callUser,
    callEnded,
  } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  console.log(videoState);
  const handleClick = (status) => {
    if (status === "video") {
      setVideoState({ ...videoState, video: !videoState.video });
    }
    if (status === "audio") {
      setVideoState({ ...videoState, audio: !videoState.audio });
    }
  };
  return (
    <div className={styles.controls}>
      <div className={styles.mic}>
        {videoState.audio ? (
          <BiMicrophone
            className={styles.micIco}
            onClick={() => handleClick("audio")}
          />
        ) : (
          <BiMicrophoneOff
            className={styles.micIco}
            onClick={() => handleClick("audio")}
          />
        )}
        <div className={styles.text}>
          <span>Microphone</span>
          <p
            className={`${
              videoState.audio ? styles.inputText : styles.inputTextDanger
            }`}
          >
            {" "}
            {videoState.audio ? "on" : "off"}
          </p>
        </div>
      </div>
      <div className={styles.video}>
        {videoState.video ? (
          <BiVideo
            className={styles.vidIco}
            onClick={() => handleClick("video")}
          />
        ) : (
          <BiVideoOff
            className={styles.vidIco}
            onClick={() => handleClick("video")}
          />
        )}
        <div className={styles.text}>
          <span>Video</span>
          <p
            className={`${
              videoState.video ? styles.inputText : styles.inputTextDanger
            }`}
          >
            {videoState.video ? "on" : "off"}
          </p>
        </div>
      </div>
      <div className={styles.call}>
        {callAccepted && !callEnded ? (
          <Button type="primary" danger onClick={() => leaveCall()}>
            End call
          </Button>
        ) : (
          <>
            <Input
              className={styles.input}
              value={idToCall}
              placeholder="paste the id to call"
              onChange={(e) => setIdToCall(e.target.value)}
            />
            <BiPhoneCall
              className={styles.callIco}
              onClick={() => callUser(idToCall)}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Controls;
