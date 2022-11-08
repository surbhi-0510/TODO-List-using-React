import React, { useState } from "react";
import "./TodoItems.model.css";

let strike = "striked";

const TodoItems = ({ ele, onDelete, toggle }) => {
  let status_val = localStorage.getItem(ele.id) === "true" ? true : false;
  const [isChecked, setIsChecked] = useState(
    status_val || false
  );
  let handlechange = (e) => {
    console.log("checked", e.target.checked);
    let key = ele.id;
    localStorage.setItem(key, e.target.checked.toString());
    toggle(ele.id);
  };
  return (
    <div className="Todobox" key={ele.id}>
      <div className="TodoboxInside">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => {
            setIsChecked(e.target.checked);
          }}
          onClick={handlechange}
        />
        <div className={isChecked ? `${strike}` : "notStriked"}>{ele.title}</div>
      </div>
      <button
        className={isChecked ? "buttonBlock" : "rem"}
        disabled={isChecked}
        onClick={() => onDelete(ele.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default TodoItems;
