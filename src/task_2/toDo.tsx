import React, { useEffect, useRef, useState } from "react";

import "./styles.css";

interface ToDo {
  title: string;
  id: number;
  isDone?: boolean;
}

interface TodoItem {
  todo: ToDo;
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
  removeTodo: (id: number) => void;
}

function DataBox(): React.ReactElement {
  const now = new Date();
  const [date, setDate] = useState<Date>(now);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className="data-box">{date.toLocaleString()}</div>;
}

const ToDoItem = React.memo(function ToDoItem({
  todo,
  setTodos,
  removeTodo,
}: TodoItem): React.ReactElement {
  console.log("rerender todo# ", todo.id);
  return (
    <li style={{ listStyle: "none" }} className="todo">
      <input
        type="checkbox"
        onClick={() => {
          setTodos((prev) =>
            prev.map((t) =>
              t.id === todo.id ? { ...t, isDone: !t.isDone } : t,
            ),
          );
        }}
      />
      <span className={todo.isDone ? "crossed" : ""}>{todo.title}</span>
      <button onClick={() => removeTodo(todo.id)} className="remove-btn">
        x
      </button>
    </li>
  );
});

export default function ToDo(): React.ReactElement {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const addToDo = () => {
    const title = inputRef?.current?.value;
    if (!title) return;

    const newTodo: ToDo = {
      title,
      id: Date.now(),
    };
    setTodos([...todos, newTodo]);
    if (inputRef.current) inputRef.current.value = "";
  };

  const removeTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  console.log(`TodoList is rendered`);

  return (
    <div className="container">
      <DataBox />
      <div>
        <input ref={inputRef} type="text" />{" "}
        <button onClick={addToDo}>+</button>
      </div>
      <ul className="todos">
        {todos.map((todo) => (
          <ToDoItem
            todo={todo}
            removeTodo={removeTodo}
            setTodos={setTodos}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
}
