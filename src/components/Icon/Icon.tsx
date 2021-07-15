import React from "react";
import { IconContext, IconType } from "react-icons";
import { DivProps } from "react-html-props";

interface Props extends DivProps {
  icon: IconType;
}

const Icon = (props: Props) => {
  return (
    <IconContext.Provider value={{ ...props }}>
      {<props.icon />}
    </IconContext.Provider>
  );
};

export default Icon;
