import React, { ReactNode } from "react";
import { INTRO_DATA } from "../../constants";
import IntroCard from "./IntroCard";
import { IntroCardProps } from "../../types";

const IntroCardsList = () => {
  return (
    <div className="flex space-x-6">
      {INTRO_DATA.map(
        ({ id, stepCount, title, content }: IntroCardProps): ReactNode => {
          return (
            <IntroCard
              key={id}
              stepCount={stepCount}
              title={title}
              content={content}
            />
          );
        }
      )}
    </div>
  );
};

export default IntroCardsList;
