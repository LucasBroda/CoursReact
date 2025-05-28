import React from 'react';
import { Todo } from '../types/Todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => {
  return (
    <tr>
      <td>{todo.label}</td>
      <td>{todo.tag}</td>
      <td>{todo.deadline}</td>
      <td>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
      </td>
    </tr>
  );
};

export default TodoItem;