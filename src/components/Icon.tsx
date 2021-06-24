import React from "react";
import { IconContext } from "react-icons";
import { DivProps } from "react-html-props";

type Props = DivProps;

export const Icon: React.FC<Props> = (props) => {
  return (
    <IconContext.Provider value={{ ...props }}>
      {props.children}
    </IconContext.Provider>
  );
};
