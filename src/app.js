import React, { useState, useContext } from "react";
import CallerNotification from "./components/callerNotification";
import Controls from "./components/controls";
import ModalName from "./components/modalName";
import Notification from "./components/notification";
import Options from "./components/options";
import VideoPlayer from "./components/videoPlayer";
import { SocketContext } from "./SocketContext";
import "./styles.css";
function App() {
  const { answerCall, call, callAccepted, callEnded } =
    useContext(SocketContext);
  console.log(callAccepted, callEnded);
  return (
    <div className="home">
      <h1 className="header">Hi Chat</h1>
      <div className={`${callAccepted && !callEnded ? "" : "card"}`}>
        <ModalName />
        <VideoPlayer>
          <CallerNotification />
        </VideoPlayer>
      </div>
      <Controls />
      {/* <Options> */}
      {/* <Notifications /> */}
      {/* </Options> */}
    </div>
  );
}

export default App;
