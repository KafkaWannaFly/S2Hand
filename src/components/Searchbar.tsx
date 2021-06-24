import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import Styles from "./Searchbar.module.scss";
import { Icon } from "./Icon";
import { DivProps } from "react-html-props";

type Props = DivProps;

export const Searchbar: React.FC<Props> = (props) => {
  return (
    <div className={`${props.className} ${Styles.searchbar}`}>
      <form>
        <div className={Styles.searchbar__container}>
          <input
            className={Styles.searchbar__input}
            type="text"
            placeholder="Tìm kiếm sản phẩm ..."
            name="searchbar-input"
            autoComplete="off"
            spellCheck="false"
          />
          <button className={Styles.searchbar__delete}>
            <Icon className={Styles.searchbar__delete__icon}>
              <MdClose />
            </Icon>
          </button>
          <button type="submit" className={Styles.searchbar__search}>
            <Icon className={Styles.searchbar__search__icon}>
              <IoSearch />
            </Icon>
          </button>
        </div>
      </form>
    </div>
  );
};
