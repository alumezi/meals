import React, { useState } from "react";
import { CopyLink } from "../assets/copyLink";
import Toast from "./Toast";

const CopyLinkButton = ({
  message,
  iconWidth,
  iconHeight,
  textToCopy,
}: {
  message: string;
  textToCopy: string;
  iconWidth?: string;
  iconHeight?: string;
}) => {
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleCopyClipBoard = async () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
    await navigator.clipboard.writeText(textToCopy);
  };

  return (
    <>
      <button
        className="flex flex-col items-center"
        onClick={() => void handleCopyClipBoard()}
      >
        <CopyLink width={iconWidth} height={iconHeight} />
        <span className="mt-1">Copy Link</span>
        <div className="mt-1 px-2 text-center text-sm text-gray-600">
          {message}
        </div>
      </button>
      <Toast
        message="Link copied!!! 🎉"
        show={showToast}
        setShow={setShowToast}
      />
    </>
  );
};

export default CopyLinkButton;
