import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

function VideoPlayer() {
  const { name, callAccepted, myVideo, userVideo, callEnded, call, stream } =
    useContext(SocketContext);
  console.log(myVideo, userVideo);
  return (
    <div>
      videoPlayer
      {stream && (
        <div>
          <h1>{name || "Name"}</h1>
          <video playsInline muted ref={myVideo} autoPlay />
        </div>
      )}
      {callAccepted && !callEnded && (
        <div>
          <h1>{call.name || "Name"}</h1>
          <video playsInline ref={userVideo} autoPlay />
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
