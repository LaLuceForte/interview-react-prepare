import React, { useState } from "react";
import styles from "../styles.module.scss";
import { type Todo } from "../model/types";

function TodoInput({
  setTodos,
}: {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}): React.ReactElement {
  const [inputValue, setInputValue] = useState<string>("");

  const addToDo = () => {
    if (!inputValue) return;

    const newTodo = {
      name: inputValue,
      id: Date.now(),
      isDone: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setInputValue("");
  };

  return (
    <div className={styles.header}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите название туду..."
        className={styles.input}
      />
      <button
        className={styles.addButton}
        onClick={addToDo}
        disabled={!inputValue.trim()}
      >
        +
      </button>
    </div>
  );
}

export default TodoInput;
