import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { CSSProperties } from "react";
import "../../css/text.css";
import { R } from "../res";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  text: string;

  serif?: boolean;

  italic?: boolean;
  underline?: boolean;

  medium?: boolean;
  semiBold?: boolean;
  black?: boolean;
}

const Text = (props: Props): JSX.Element => {
  const { text, style, italic, underline, onClick, id, className } = props;

  const defaultStyle: CSSProperties = {
    fontFamily: getFontFamily(props),
    fontStyle: italic ? "italic" : "normal",
    textDecoration: underline ? "underline" : undefined
  };

  return (
    <div
      id={id}
      className={className}
      onClick={onClick}
      style={{
        ...defaultStyle,
        ...style
      }}
    >
      {text}
    </div>
  );
};

export const Text14 = (props: Props): JSX.Element => {
  return <Text style={{ fontSize: 14 }} {...props} />;
};

function getFontFamily(props: Props) {
  const { serif, medium, semiBold, black } = props;

  let font = R.fontFamily.montserrat.regular;

  if (serif) {
    font = R.fontFamily.ibmPlexSerif.regular;

    if (medium) {
      font = R.fontFamily.ibmPlexSerif.medium;
    } else if (semiBold) {
      font = R.fontFamily.ibmPlexSerif.semiBold;
    } else if (black) {
      font = R.fontFamily.ibmPlexSerif.bold;
    }
  } else {
    if (medium) {
      font = R.fontFamily.montserrat.medium;
    } else if (semiBold) {
      font = R.fontFamily.montserrat.semiBold;
    } else if (black) {
      font = R.fontFamily.montserrat.black;
    }
  }

  return font;
}
