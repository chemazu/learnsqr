import React from "react";
import "./style.scss";
import filter from "../../resource/filter.svg";

export default function FilterItem(props) {
  const { title,openFilter } = props;
  return (
    <div className="filter-item">
      <p>{title}</p>
      <img src={filter} alt="filter"  onClick={openFilter}/>
    </div>
  );
}
