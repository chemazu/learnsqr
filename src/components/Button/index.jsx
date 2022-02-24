import React from "react";
import "./style.scss";

export default function Button(props) {
  return <button {...props}>{props.title}</button>;
}
