import React from "react";
import Logo from "../Logo";
import search from "../../resource/search.svg";
import bell from "../../resource/bell.svg";
import user from "../../resource/user.jpg";
import caretdown from "../../resource/caretdown.svg";
import menu from "../../resource/menu-icon.svg";

import "./style.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="nav">
        <Logo />
        <div className="search">
          <input placeholder={"Search for anything"} />
          <div>
            <img src={search} alt="search" />
          </div>
        </div>
        <div className="right">
          <p>Docs</p>
          <img className="bell" src={bell} alt="alert" />
          <img className="user-image" src={user} alt="user" />
          <div className="account">
            <p>Chemazu</p>
            <img className="caretdown" src={caretdown} alt="caretdown" />
          </div>
        </div>
      </div>
      <div className="mob-nav">
        <Logo />
        <div className="search">
          <input placeholder={"Search for anything"} />
          <div>
            <img src={search} alt="search" />
          </div>
        </div>
      </div>
    </div>
  );
}
