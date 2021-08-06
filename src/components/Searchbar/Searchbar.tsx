import React, { useState, MouseEvent } from "react";
import { IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import styles from "./Searchbar.module.scss";
import Icon from "../Icon/Icon";
import { DivProps } from "react-html-props";
import { strings } from "../../data";

interface Props extends DivProps {}

const Searchbar = ({ className, ...props }: Props) => {
  const contents = strings.searchbar;

  const [isFocus, setIsFocus] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const onSearchHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!searchInput) setIsFocus(!isFocus);
  };

  return (
    <div
      className={`${className} ${styles.searchbar} ${
        isFocus || !!searchInput ? styles.searchbar__active : ""
      }`}
      {...props}
    >
      <form>
        <div className={styles.searchbar__container}>
          <input
            className={`${styles.searchbar__input} ${
              isFocus || !!searchInput ? styles.searchbar__input__active : ""
            }`}
            type="text"
            placeholder={contents.placeholder}
            name="searchbar-input"
            autoComplete="off"
            spellCheck="false"
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className={styles.searchbar__delete}>
            <Icon className={styles.searchbar__delete__icon} icon={MdClose} />
          </button>
          <button
            type="submit"
            className={styles.searchbar__search}
            onClick={onSearchHandler}
          >
            <Icon className={styles.searchbar__search__icon} icon={IoSearch} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
