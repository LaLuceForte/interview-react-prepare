import React from "react";
import styles from "../styles.module.scss";
import { type Todo } from "../model/types";

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (todo: Todo) => void;
  checkTodo: (todo: Todo) => void;
}

const TodoItem = React.memo(function TodoItem({
  todo,
  deleteTodo,
  checkTodo,
}: TodoItemProps): React.ReactElement {
  console.log("todoitem rendered");
  return (
    <div className={styles.todo}>
      <input
        type="checkbox"
        className={styles.checkbox}
        onClick={() => checkTodo(todo)}
      />
      <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>
        {todo.name}
      </span>
      <button className={styles.deleteButton} onClick={() => deleteTodo(todo)}>
        x
      </button>
    </div>
  );
});

export default TodoItem;
