import React from "react";

import PropTypes from "prop-types";

import classnames from "classnames";

import "./styles.scss";

TodoList.propTypes = {
  todoList: PropTypes.array,

  onTodoList: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],

  onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
  // 6. kiểm tra ko truyền ko làm, ngược lại sẽ gọi hàm onTodoClick

  const handleTodoClick = (todo, idx) => {
    if (!onTodoClick) return;

    onTodoClick(todo, idx);
  };

  return (
    <ul className="todo-list">
      {todoList.map((todo, idx) => (
        <li
          key={todo.id}
          className={classnames({
            "todo-item": true,

            completed: todo.status === "completed",
          })}
          //5. Mỗi khi dc click truyền vào todo và index

          onClick={() => handleTodoClick(todo, idx)}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
