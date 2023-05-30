export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodoItemProps extends Todo {
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
}

export interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
}

export interface NewTodoFormProps {
  onSubmit: (title: string) => void;
}