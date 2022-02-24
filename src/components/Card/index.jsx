import React from "react";
import activeStatus from "../../resource/active-status.svg";
import "./style.scss";

export default function Card() {
  return (
    <div className="card">
      <img src={activeStatus} />
      <p>Users</p>
      <p>2,453</p>
    </div>
  );
}
