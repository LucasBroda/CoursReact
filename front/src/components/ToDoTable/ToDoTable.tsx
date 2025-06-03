import React, { useContext } from 'react';
import { TodoContext } from '../../context/ToDoContext';

const TodoTable: React.FC = () => {
  const { state, toggleTodo } = useContext(TodoContext);

  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'completed') return todo.completed;
    if (state.filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Label</th>
          <th>Tag</th>
          <th>Deadline</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredTodos.map(todo => (
          <tr key={todo.id}>
            <td>{todo.label}</td>
            <td>{todo.tag}</td>
            <td>{todo.deadline.toLocaleDateString()}</td>
            <td>{todo.completed ? 'Completed' : 'Incomplete'}</td>
            <td>
              <button onClick={() => toggleTodo(todo.id)}>
                {todo.completed ? 'Undo' : 'Complete'}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoTable;