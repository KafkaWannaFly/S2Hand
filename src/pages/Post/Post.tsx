import React from "react";
import styles from "./Post.module.scss";
import { DivProps } from "react-html-props";
import { PostForm } from "../../containers";

interface Props extends DivProps {}

const Post = (props: Props) => {
  return (
    <div className={`${styles.post} ${props.className}`}>
      <div className={styles.post__container}>
        <PostForm className={styles.post__form} />
      </div>
    </div>
  );
};

export default Post;
