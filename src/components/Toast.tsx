import React from "react";

interface ToastProps {
  message: string;
  show: boolean;
  setShow: (show: boolean) => void;
}

const Toast: React.FC<ToastProps> = ({ message, show, setShow }) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 p-3 text-center ${
        show ? "bg-red-500 text-white" : "hidden"
      }`}
    >
      <span className="font-medium">{message}</span>
    </div>
  );
};

export default Toast;
