import { useState } from "react";
import SearchInput from "./task_1/searchInput";
import ToDo from "./task_2/components/todoApp";
import GenerateDirs from "./task_3/generateDirs";
import Cart from "./cart";
type Task = 1 | 2 | 3;

const TASKS = [
  { id: 1, component: <Cart /> },
  { id: 2, component: <SearchInput /> },
  { id: 3, component: <GenerateDirs /> },
  { id: 4, component: <ToDo /> },
] as const;

function App() {
  const [task, setTask] = useState<Task>(1);

  console.log("app rerendererd");
  console.log(TASKS[0].component.type.name);
  return (
    <>
      <div className="button-group">
        {Array.from({ length: TASKS.length }, (_, i) => i + 1).map((item) => (
          <button
            onClick={() => setTask(item as Task)}
            className={"task-button" + (task === item ? " active" : "")}
            key={item}
          >
            {TASKS[item - 1].component.type.name}
          </button>
        ))}
      </div>
      {TASKS.find((t) => t.id === task)?.component}
    </>
  );
}

export default App;
