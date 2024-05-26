import { useEffect, useState } from "react";

const useTodo = () => {
  const [todosList, setToDosList] = useState(() => {
    const todoString = localStorage.getItem("todo");
    if (todoString) {
      return JSON.parse(todoString);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todosList));
}, [todosList]);

  const addNewTodo = (newTodo) => {
    setToDosList((prev) => [newTodo, ...prev]);
  };

  const deleteTodo = (id) => {
    const newTodos = todosList.filter((todo) => todo.id !== id);
    setToDosList(newTodos);
  }

  return [todosList, addNewTodo, deleteTodo];
};

export default useTodo;
