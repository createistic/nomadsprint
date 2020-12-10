import { Button } from "createistic-designsystem";
import React from "react";
import "./modal.css";

interface IProfileProps {
  message: string;
  onClose: () => void;
}

const Modal: React.FC<IProfileProps> = ({ message, onClose }): React.ReactElement => {
  document.onkeydown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };
  return (
    <>
      <div className="Backdrop" style={{ zIndex: 999 }}></div>
      <div
        className="Modal"
        style={{
          opacity: 1,
          zIndex: 999,
        }}
        role="dialog"
      >
        <div className="modal-header">
          <h2>Notification</h2>
        </div>
        <div className="modal-body">{message}</div>
        <Button text="close" onClick={onClose} />
      </div>
    </>
  );
};

export default Modal;
