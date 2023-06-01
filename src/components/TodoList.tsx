import { TodoItem } from "./TodoItem";
import { TodoListProps } from "../types";


export function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
  return (
    <ul className="text">
      {todos.length === 0 && <li className="text">No todos</li>}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}


