import React from "react";

export default function UserFilterItem(props) {
  const { handleChange, users, unique, onlyUnique } = props;
  const { Title, slug } = props.item;
  const food = [];
  return (
    <div className="user-filter-item">
      <label>{Title}</label>
      <select name={slug} id="org" onChange={handleChange}>
        <option value=""></option>
        {users.map((item) => {
          food.push(item[slug]);
        })}
        {food.filter(onlyUnique).map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
