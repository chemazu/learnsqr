import React from "react";
import "./style.scss";

export default function UserFilterItem(props) {
  const { handleChange, users, onlyUnique } = props;
  const { Title, slug } = props.item;
  const unique = [];
  return (
    <div className="user-filter-item">
      <label>{Title}</label>
      <div className="select-div">
        <select name={slug} id="org" onChange={handleChange}>
          <option value=""></option>
          {users.map((item) => {
            unique.push(item[slug]);
          })}
          {unique.filter(onlyUnique).map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
