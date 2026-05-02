import type React from "react";
import styles from "../styles.module.scss";
import { useState } from "react";
import TodoList from "./todoList";
import TodoInput from "./todoInput";
import { type Todo } from "../model/types";

export default function ToDo(): React.ReactElement {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className={styles.box}>
      <TodoInput setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
