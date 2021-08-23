import React, { useState, useContext } from "react";
import CallerNotification from "./components/callerNotification";
import Controls from "./components/controls";
import ModalName from "./components/modalName";
import VideoPlayer from "./components/videoPlayer";
import { SocketContext } from "./SocketContext";
import "./styles.css";
function App() {
  const { callAccepted, callEnded } = useContext(SocketContext);
  const [editName, setEditName] = useState(false);
  return (
    <div className="home">
      <h1 className="header">Hi Chat</h1>
      <div className={`${callAccepted && !callEnded ? "" : "card"}`}>
        <ModalName editName={editName} setEditName={setEditName} />
        <VideoPlayer setEditName={setEditName}>
          <CallerNotification />
        </VideoPlayer>
      </div>
      <Controls />
    </div>
  );
}

export default App;
