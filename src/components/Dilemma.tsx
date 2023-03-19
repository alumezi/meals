import React, { useState } from "react";
import type { Choice } from "../types/common";

interface Props {
  firstChoice: Choice;
  secondChoice: Choice;
  onSelectChoice: (id: string) => void;
}

const Dilemma: React.FC<Props> = ({
  firstChoice,
  secondChoice,
  onSelectChoice,
}) => {
  const [expandedFirst, setExpandedFirst] = useState(false);
  const [expandedSecond, setExpandedSecond] = useState(false);

  const colors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-teal-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
  ];

  return (
    <div className="flex h-screen	max-h-screen overflow-hidden overscroll-none">
      <div
        className={`h-screen max-h-screen	 ${
          colors[firstChoice.randomColorNumber] || ""
        } flex items-center justify-center ${
          expandedFirst ? "w-full" : "w-1/2 cursor-pointer"
        } transition-width duration-300`}
        onClick={() => {
          setExpandedFirst(!expandedFirst);
          setExpandedSecond(false);
          setTimeout(() => {
            onSelectChoice(firstChoice.id);
          }, 500);
        }}
      >
        <div className="px-px text-center text-white">{firstChoice.text}</div>
      </div>
      <div
        className={`h-screen max-h-screen	 ${
          colors[secondChoice.randomColorNumber] || ""
        } flex items-center justify-center ${
          expandedSecond ? "w-full" : "w-1/2 cursor-pointer"
        } transition-width duration-300`}
        onClick={() => {
          setExpandedSecond(!expandedSecond);
          setExpandedFirst(false);
          setTimeout(() => {
            onSelectChoice(secondChoice.id);
          }, 500);
        }}
      >
        <div className="px-px text-center text-white">{secondChoice.text}</div>
      </div>
    </div>
  );
};

export default Dilemma;
