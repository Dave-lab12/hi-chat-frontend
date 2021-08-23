import React, { useEffect, useState, useContext } from "react";
import { Modal, Input } from "antd";
import { SocketContext } from "../SocketContext";
function ModalName({ editName, setEditName }) {
  const [modal1Visible, setModal1Visible] = useState(false);
  const { setName } = useContext(SocketContext);
  const handleChange = (e) => {
    localStorage.setItem("user name", e.target.value);
    setName(e.target.value);
  };
  useEffect(() => {
    if (!localStorage.getItem("user name")) {
      setModal1Visible(true);
    }
    if (editName) {
      setEditName(false);
      setModal1Visible(true);
    }
  }, [editName,setEditName]);
  console.log(editName);
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
          onChange={(e) => handleChange(e)}
        />
      </Modal>
    </div>
  );
}

export default ModalName;
