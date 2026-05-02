import React, { useCallback } from "react";
import styles from "../styles.module.scss";
import { type Todo } from "../model/types";
import TodoItem from "./todoItem";

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoList({ todos, setTodos }: TodoListProps): React.ReactElement {
  console.log("todos rendered");

  const checkTodo = useCallback((todoToCheck: Todo) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todoToCheck.id ? { ...t, isDone: !t.isDone } : t,
      ),
    );
  }, []);

  const deleteTodo = useCallback((todoToDelete: Todo) => {
    setTodos((prev) => prev.filter((t) => t.id !== todoToDelete.id));
  }, []);

  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem
          checkTodo={checkTodo}
          deleteTodo={deleteTodo}
          todo={todo}
          key={todo.id}
        />
      ))}
    </div>
  );
}

export default TodoList;
