import React, { useState } from "react";
import "./Todos.model.css";
import TodoItems from "./TodoItems";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  let [value, setValues] = useState("");
  const [showAll, setShowAll] = useState(true);

  const onDelete = (id) => {
    let newTodos = todos.filter((e) => {
      return e.id !== id;
    });
    setTodos(newTodos);
  };

  const toggle = (ids) => {
    let status_val = localStorage.getItem(ids) === "true" ? true : false;
    const updateTodo = todos.map((item) =>
      item.id === ids ? { ...item, status: status_val } : item
    );
    setTodos(updateTodo);
  };
  return (
    <div className="">
      <h1>TODO LIST</h1>
      <input
        className="ipBox"
        value={value}
        placeholder="Enter Todo Items/Work"
        onChange={(e) => {
          setValues(e.target.value);
        }}
        onKeyDownCapture={(e) => {
          if (e.key === "Enter" && value !== "") {
            setTodos([
              ...todos,
              { id: Date.now(), title: value, status: false },
            ]);
            setValues("");
          }
        }}
      />
      {todos
        .filter((item) => (showAll ? true : !item.status))
        .map((ele) => (
          <TodoItems
            key={ele.id}
            ele={ele}
            onDelete={onDelete}
            toggle={toggle}
          />
        ))}
      <div>
        <button
          onClick={() => {
            setShowAll(!showAll);
          }}
          className= {showAll ? "showButton comp":"showButton uncomp"}
        >
          {showAll ? "Show Only Uncompleted Tasks" : "Show All"}
        </button>
      </div>
    </div>
  );
};

export default Todos;
