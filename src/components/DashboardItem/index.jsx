import React from "react";
import "./style.scss";

export default function DashboardItem(props) {
  const { img, title } = props.item;
  return (
    <div className="dashboarditem">
      <img src={img} />
      <p>{title}</p>
    </div>
  );
}
