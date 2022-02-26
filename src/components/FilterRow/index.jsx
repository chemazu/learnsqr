import React, { useEffect } from "react";
import FilterContent from "../FilterContent";
import "./style.scss";

export default function FilterRow(props) {
  const { item } = props;
  
  return (
    <div className="filter-row">
      <FilterContent title={item.organization} />
      <FilterContent id={item._id} title={item.username} />
      <FilterContent title={item.email} />
      <FilterContent title={item.phone} />
      <FilterContent title={item.date} />
      <FilterContent title={item.status} />
    </div>
  );
}
