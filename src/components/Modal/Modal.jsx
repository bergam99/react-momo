import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({}, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog}>
      <form method="dialog">
        <button>X</button>
      </form>
      <p>modal</p>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
