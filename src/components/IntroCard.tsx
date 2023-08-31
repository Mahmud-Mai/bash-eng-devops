import React from "react";
import { IntroCardProps } from "../../types";

const IntroCard = ({ icon, stepCount, title, content }: IntroCardProps) => {
  return (
    <div className="flex flex-col border p-6 space-y-8">
      <p className="flex justify-between w-full">
        <span>{icon}</span> <span>{stepCount}</span>
      </p>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default IntroCard;
