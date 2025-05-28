import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const AddTodoForm: React.FC = () => {
  const { addTodo } = useContext(TodoContext);
  const [label, setLabel] = useState('');
  const [tag, setTag] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (label && tag && deadline) {
      addTodo({ label, tag, deadline, completed: false });
      setLabel('');
      setTag('');
      setDeadline('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Todo Label"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Tag"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;