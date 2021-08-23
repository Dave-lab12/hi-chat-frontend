import React, { useState, useEffect, useContext } from "react";
import { Modal, Button } from "antd";
import { SocketContext } from "../SocketContext";
import ring from "../asset/callSound.mp3";
function CallerNotification() {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  const [visible, setVisible] = useState(false);

  const audio = new Audio(ring);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const playRingtone = () => {
    audio.play();
  };

  const stopRingtone = () => {
    audio.pause();
  };

  const handleOk = () => {
    setVisible(false);
    audio.pause();
  };
  const handleCancel = () => {
    setVisible(false);
    audio.pause();
  };
  const onclick = () => {
    answerCall();
    stopRingtone();
  };
  useEffect(() => {
    setVisible(true);
    if (call.isReceivingCall && !callAccepted) playRingtone();
  }, [call, callAccepted, playRingtone]);

  return (
    <div>
      {call.isReceivingCall && !callAccepted && (
        <>
          <Modal
            visible={visible}
            title="Hi chat"
            onOk={stopRingtone}
            onCancel={handleCancel}
            footer={[
              <Button key="cancel" type="primary" danger onClick={handleOk}>
                Decline
              </Button>,
              <Button
                key="submit"
                type="primary"
                //  onOk={loading}
                onClick={onclick}
              >
                Answer
              </Button>,
            ]}
          >
            <h1>{call.name} is calling you</h1>
          </Modal>
        </>
      )}
    </div>
  );
}

export default CallerNotification;
