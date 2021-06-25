import React, { useState, MouseEvent } from "react";
import { IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import Styles from "./Searchbar.module.scss";
import { Icon } from "./Icon";
import { DivProps } from "react-html-props";

type Props = DivProps;

export const Searchbar: React.FC<Props> = (props) => {
  const [isFocus, setIsFocus] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const onSearchHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!searchInput) setIsFocus(!isFocus);
  };

  return (
    <div
      className={`${props.className} ${Styles.searchbar} ${
        isFocus || !!searchInput ? Styles.searchbar__active : ""
      }`}
    >
      <form>
        <div className={Styles.searchbar__container}>
          <input
            className={`${Styles.searchbar__input} ${
              isFocus || !!searchInput ? Styles.searchbar__input__active : ""
            }`}
            type="text"
            placeholder="Tìm kiếm sản phẩm ..."
            name="searchbar-input"
            autoComplete="off"
            spellCheck="false"
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className={Styles.searchbar__delete}>
            <Icon className={Styles.searchbar__delete__icon} icon={MdClose} />
          </button>
          <button
            type="submit"
            className={Styles.searchbar__search}
            onClick={onSearchHandler}
          >
            <Icon className={Styles.searchbar__search__icon} icon={IoSearch} />
          </button>
        </div>
      </form>
    </div>
  );
};
