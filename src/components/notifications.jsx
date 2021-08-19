import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

function Notifications() {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <div>
      {call.isReceivingCall && !callAccepted && (
        <>
          <h1>{call.name} is calling</h1>
          <button onClick={answerCall}>answer call </button>
        </>
      )}
    </div>
  );
}

export default Notifications;
