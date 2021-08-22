import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../SocketContext";
function Options({ children }) {
  const { me, callAccepted, name, setName, leaveCall, callUser, callEnded } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  console.log(me);
  return (
    <div>
      <>
        <h1>account info</h1>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <CopyToClipboard text={me}>
          <button>copy your id</button>
        </CopyToClipboard>
      </>
      <>
        <h1>make a call</h1>
        <input value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
        {callAccepted && !callEnded ? (
          <button onClick={leaveCall}>hangup</button>
        ) : (
          <button onClick={() => callUser(idToCall)}> call</button>
        )}
      </>

      {children}
    </div>
  );
}

export default Options;
