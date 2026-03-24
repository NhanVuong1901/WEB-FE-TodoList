import React, { useState } from "react";
import TodoList from "../components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,

      title: "Một",

      status: "new",
    },

    {
      id: 2,

      title: "Hai",

      status: "completed",
    },

    {
      id: 3,

      title: "Ba",

      status: "new",
    },
  ];

  //1. khai báo initTodoList thành State để thay đổi
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setfilteredStatus] = useState("all");

  // 2. handleTodoClick và update status
  const handleTodoClick = (todo, idx) => {
    //clone current array to do the new one
    const newTodoList = [...todoList];

    console.log(todo, idx);

    //toggle state

    newTodoList[idx] = {
      ...newTodoList[idx],

      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };

    //update todo list
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setfilteredStatus("all");
  };

  const handleShowCompletedClick = () => {
    setfilteredStatus("completed");
  };

  const handleShowNewClick = () => {
    setfilteredStatus("new");
  };

  // hàm render theo filteredStatus
  const renderedTodoList = todoList.filter(
    (todo) => filteredStatus === "all" || filteredStatus === todo.status
  );
  console.log(renderedTodoList);

  return (
    <div className="todo-container">
      <h3>Todo List</h3>

      {/* truyem data cha qua con mang todoList */}

      <TodoList
        // todoList={todoList}
        todoList={renderedTodoList}
        //3. Khi click gọi hàm handleTodoClick

        onTodoClick={handleTodoClick}
      />
      {/* # button gọi hàm */}
      <div className="filter-buttons">
        <button
          className={filteredStatus === "all" ? "active" : ""}
          onClick={handleShowAllClick}>
          Show All
        </button>
        <button
          className={filteredStatus === "completed" ? "active" : ""}
          onClick={handleShowCompletedClick}>
          Show Completed
        </button>
        <button
          className={filteredStatus === "new" ? "active" : ""}
          onClick={handleShowNewClick}>
          Show New
        </button>
      </div>
    </div>
  );
}

export default TodoFeature;
