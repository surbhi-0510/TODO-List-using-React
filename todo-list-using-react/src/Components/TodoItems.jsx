import React, { useState } from "react";
import "./TodoItems.model.css";

let strike = "striked";

const TodoItems = ({ ele, onDelete , toggle }) => {
  // console.log("ele", ele);
  const [isChecked, setIsChecked] = useState(ele.isChecked || false);
  const [val, setVal] = React.useState(false);
  let handlechange = (e) => {
    setIsChecked(e.target.checked);
    setVal(!val);
    toggle(ele.id)
  };
  return (
    <div className="Todobox" key={ele.id}>
      <div className="TodoboxInside">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => {
            const val = e.target.checked
            console.log("e:",val);
            // const val = e.target.checked
            setIsChecked(e.target.checked);
            // handlechange()
          }}
          onClick={handlechange}
        />
        {/* {console.log(isChecked)} */}
        <div className={isChecked ? `${strike}` : ""}>{ele.title}</div>
      </div>
      <button className={val? 'buttonBlock' : 'rem'} disabled={val} onClick={() => onDelete(ele.id)}>
        Remove
      </button>
    </div>
  );
};

export default TodoItems;
