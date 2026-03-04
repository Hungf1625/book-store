import { useEffect,useRef } from "react";
import "./Modal.css";
import ScreenCover from "../ScreenCover";

function Modal({ children, isDisplay = false, title, onClose }) {
  const refModalContainer = useRef();


  useEffect(() => {
    if (!isDisplay) return;

    const handleEsc = (event) => {
      if (event.key === 'Escape') onClose();
    };

    const handleClickOutside = (event) => {
      if (refModalContainer.current && !refModalContainer.current.contains(event.target)) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDisplay,onClose]);


  if (isDisplay) {
    return (
      <>
        <ScreenCover isCovered={isDisplay}/>
        <div ref={refModalContainer} className="Modal bg-white block rounded-2xl p-5">
          <div className="Modal_header grid grid-cols-3 items-center">
            <div className="w-7"></div>
            <span className="uppercase font-medium text-center">{title}</span>
            <button
              className="text-gray-400 justify-self-end hover:text-green-500 hover:cursor-pointer"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {children}
        </div>
      </>
    );
  }
}

export default Modal;
