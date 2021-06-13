import React, { DetailedHTMLProps, HTMLAttributes } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  // Put extra props here
}

export const Navbar = (props: Props) => {
  return <div {...props}>Navbar</div>;
};
