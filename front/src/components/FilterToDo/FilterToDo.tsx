import React, { useContext } from 'react';
import { TodoContext } from '../../context/ToDoContext';

const FilterTodos: React.FC = () => {
  const { state, setFilter } = useContext(TodoContext);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value as 'all' | 'completed' | 'incomplete');
  };

  return (
    <div>
      <label htmlFor="filter">Filter To-Dos: </label>
      <select id="filter" value={state.filter} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
};

export default FilterTodos;