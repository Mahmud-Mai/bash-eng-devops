import React from "react";
import { IntroCardProps } from "../../types";

const IntroCard = ({ stepCount, title, content }: IntroCardProps) => {
  return (
    <div className="flex flex-col border shadow-lg rounded-lg p-6 space-y-8">
      <p className="flex justify-between w-full">
        <span>{stepCount}</span>
      </p>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default IntroCard;
