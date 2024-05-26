import { useState } from "react";

import ToDoTile from "./component/ToDoTile";

import useTodo from "./hooks/useTodoHook";
import style from "./App.module.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, addTodo, deleteTodo] = useTodo();

  const addNewTodo = () => {
    const newTodoObject = {
      id:Math.random()*100,
      title: newTodo,
      isCompleted: false,
    };
    addTodo(newTodoObject);
    setNewTodo("")
  };
  return (
    <>
      <h1 className={style.heading}>To Do App</h1>
      <div className={style.main__container}>
        <div className={style.add__task__container}>
          <input
            type="text"
            placeholder="Buy Milk...."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button type="submit" onClick={addNewTodo}>
            +
          </button>
        </div>
        <div className={style.tasks_container}>
          {todoList
            .filter((todo) => !todo.isCompleted)
            .map((todo) => {
              return <ToDoTile title={todo.title} key={todo.id} onDelete={() => {deleteTodo(todo.id)}}/>
            })}
        </div>
      </div>
    </>
  );
}

export default App;
