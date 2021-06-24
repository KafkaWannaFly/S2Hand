import React from "react";
import { IconContext, IconType } from "react-icons";
import { DivProps } from "react-html-props";

interface Props extends DivProps {
  icon: IconType;
}

export const Icon: React.FC<Props> = (props) => {
  return (
    <IconContext.Provider value={{ ...props }}>
      {<props.icon />}
    </IconContext.Provider>
  );
};
