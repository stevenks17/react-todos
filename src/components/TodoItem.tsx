import { TodoItemProps } from "../types";
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
}
