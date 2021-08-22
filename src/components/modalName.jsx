import React, { useEffect, useState, useContext } from "react";
import { Modal, Input } from "antd";
import {SocketContext} from "../SocketContext";
function ModalName() {
  const [modal1Visible, setModal1Visible] = useState(false);
  const { setName } = useContext(SocketContext);
  useEffect(() => {
    setModal1Visible(true);
  }, []);
  return (
    <div>
      <Modal
        title="Enter Your Name"
        style={{ top: 20 }}
        visible={modal1Visible}
        onOk={() => setModal1Visible(false)}
        onCancel={() => setModal1Visible(false)}
      >
        <Input
          placeholder="type in your name"
          onChange={(e) => setName(e.target.value)}
        />
      </Modal>
    </div>
  );
}

export default ModalName;
