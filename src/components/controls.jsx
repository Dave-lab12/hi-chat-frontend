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
  const { me, callAccepted, name, setName, leaveCall, callUser, callEnded } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  return (
    <div className={styles.controls}>
      <div className={styles.mic}>
        <BiMicrophone className={styles.micIco} />
        <div className={styles.text}>
          <span>Microphone</span>
          <p>on</p>
        </div>
      </div>
      <div className={styles.video}>
        <BiVideo className={styles.vidIco} />
        <div className={styles.text}>
          <span>Video</span>
          <p>on</p>
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
{
  /* <>
<h1>make a call</h1>
<input value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
{callAccepted && !callEnded ? (
  <button onClick={leaveCall}>hangup</button>
) : (
  <button onClick={() => callUser(idToCall)}> call</button>
)}
</> */
}
