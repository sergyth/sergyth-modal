import { useEffect } from "react";
import "./modal.css";

const Modal = ({
  isOpen,
  onClose,
  children,
  className: { overlay: overlayClass = "", content: contentClass = "" } = {},
}) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${overlayClass}`} onClick={onClose}>
      <div
        className={`modal-content ${contentClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export { Modal };
