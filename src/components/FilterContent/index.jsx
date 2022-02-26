import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function FilterContent(props) {
  const { title, id } = props;
  return (
    <div className="filter-content">
      {id ? (
        <Link to ={`/userdetail/${id}`}>
          <p className={title}>{title}</p>
        </Link>
      ) : (
        <p className={title}>{title}</p>
      )}
    </div>
  );
}
