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
    const updateTodo = todos.map((item) =>
      item.id === ids ? { ...item, status: !item.status } : item
    );
    setTodos(updateTodo);
  };
  return (
    <div className="">
      <h1>TODO LIST</h1>
      <input
        value={value}
        placeholder="Enter Todo Items/Work"
        onChange={(e) => {
          setValues(e.target.value);
        }}
        onKeyDownCapture={(e) => {
          // console.log(e);
          if (e.key === "Enter" && value !== "") {
            setTodos([
              ...todos,
              { id: Date.now(), title: value, status: false },
            ]);
            setValues("");
          }
        }}
      />

      {/* <button
        onClick={() => {
          setTodos([...todos, { id: Date.now(), title: value }]);
          setValues("");
        }}
      >
        ADD
      </button> */}
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
      {/* {console.log('todo ',todos)} */}

      <button
        onClick={() => {
          setShowAll(!showAll);
        }}
        className="showButton"
      >
        {showAll ? "Show Only Uncompleted Tasks" : "Show All"}
      </button>
    </div>
  );
};

export default Todos;
