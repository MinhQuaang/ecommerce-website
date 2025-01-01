import { useEffect } from "react";

function Overlay({ show, onClose }) {
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";
  }, [show]);
  return (
    <div
      className={`fixed inset-0 bg-black w-full h-full z-40 ${
        show ? "opacity-75" : "hidden opacity-0"
      }`}
      onClick={() => {
        if (onClose) {
          onClose();
        }
      }}
    ></div>
  );
}

export default Overlay;
