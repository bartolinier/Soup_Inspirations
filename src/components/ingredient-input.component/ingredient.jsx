import React, { useState } from "react";
import TodoForm from "./ingredientsListForm";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id}>
        {todo.textName}
        {todo.textQuantity}
        {todo.textUnit}
      </div>
      <div className="icons">
        <button onClick={() => removeTodo(todo.id)} className="delete-icon">
          delete
        </button>
        <button
          onClick={() => setEdit({ id: todo.id, value: todo.textName })}
          className="edit-icon"
        >
          edit
        </button>
      </div>
    </div>
  ));
};

export default Todo;
