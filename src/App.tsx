import { useEffect, useState } from "react";
import "./style.css";
import { NewTodoForm } from "./components/NewTodoForm";
import { TodoList } from "./components/TodoList";
import { Todo } from "./types";

export default function App() {
  const [parentUnfold, setParentUnfold] = useState(false);
  const [childUnfold, setChildUnfold] = useState(false);
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("ITEMS");
    if (saved == null) return [];

    return JSON.parse(saved);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    setParentUnfold(true);
    setTimeout(() => setChildUnfold(true), 1000); // Assuming your unfold animation duration is 1s
    return () => {
      setParentUnfold(false);
      setChildUnfold(false);
    };
  }, []);

  function addTodo(title: string): void {
    setTodos((currentTodos: Todo[]) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }
  function toggleTodo(id: string, completed: boolean): void {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id: string) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    });
  }

  return (
    <div
      className={`min-h-screen flex justify-center items-center bg-gray-900 ${
        parentUnfold ? "animate-unfold-in" : "animate-unfold-out"
      }`}
    >
      <div
        className={`bg-gray-700 rounded-lg p-6 m-4 w-96 h-96 flex flex-col justify-center items-center ${
          childUnfold ? "animate-blow-up" : "animate-unfold-out"
        }`}
      >
        <h1 className="text">Todo List</h1>
        <NewTodoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}
