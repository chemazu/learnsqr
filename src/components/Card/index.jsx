import React from "react";
import activeStatus from "../../resource/active-status.svg";
import "./style.scss";

export default function Card(props) {
  const { img, title, number } = props.item;
  return (
    <div className="card">
      <img src={img} />
      <p>{title}</p>
      <p>{number}</p>
    </div>
  );
}
