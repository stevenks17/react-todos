import { TodoItemProps } from "../types";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Icon } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <li className="flex justify-between items-center space-x-2 py-2">
      <label className="text flex items-center">
        <Checkbox
          checked={completed}
          onChange={() => toggleTodo && toggleTodo(
            id,
            !completed
          )}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        {title}
      </label>
      <DeleteForeverIcon className="hover:text-red-500 hover:cursor-pointer focus:bg-red-600 " onClick={() => deleteTodo(id)} />
    </li>
  );
}
