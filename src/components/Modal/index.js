import React from "react";
import ReactDOM from "react-dom";
import "./modal.scss";

const ModalContainer = ({ children, state, close }) => {
  const modal__node = document.getElementById("modal__window");

  return ReactDOM.createPortal(
    <>
      <div
        className={`cal__modal ${state ? "show__modal" : ""}`}
        onClick={(e) => close(e)}
      >
        <div className="modal__content">{children}</div>
      </div>
    </>,
    modal__node
  );
};

export default ModalContainer;
