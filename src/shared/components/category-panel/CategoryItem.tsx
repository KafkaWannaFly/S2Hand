import React, { CSSProperties, DetailedHTMLProps, HTMLAttributes } from "react";
import { Card } from "react-bootstrap";
import { Text } from "..";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  imageSource: string;
  title: string;
}

export const CategoryItem = (props: Props) => {
  return (
    <div {...props}>
      <Card style={styles.container}>
        <Card.Img variant="top" src={props.imageSource} style={styles.img} />
        <Text semiBold text={props.title} style={styles.title} />
      </Card>
    </div>
  );
};

interface Styles {
  container: CSSProperties;
  title: CSSProperties;
  img: CSSProperties;
}

const styles: Styles = {
  container: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    borderRadius: 15,
    marginLeft: 20,
    marginRight: 20
  },
  title: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 12
  },
  img: { marginBottom: 10 }
};
