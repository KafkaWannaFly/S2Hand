import React from "react";
import Logo from "../../assets/logos/logo.svg";
import { Searchbar } from "./header/childs";
import "./header.scss";

export const Header = () => {
  return (
    <header id="header">
      <img src={Logo} alt="" id="logo" />
      <div id="searchbar">
        <Searchbar />
      </div>
      <nav id="nav-container">
        <div id="nav-container-page">
          <ul id="nav-page-items">
            <li>Trang Chủ</li>
            <li>Quản lý tin</li>
            <li>Thông báo</li>
            <li>Giỏ hàng</li>
          </ul>
        </div>
        <div id="nav-container-action"></div>
      </nav>
    </header>
  );
};
