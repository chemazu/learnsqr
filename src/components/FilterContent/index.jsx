import React from "react";
import "./style.scss";

export default function FilterContent(props) {
  const { title } = props;
  return (
    <div className="filter-content">
      <p className={title}>{title}</p>
    </div>
  );
}
