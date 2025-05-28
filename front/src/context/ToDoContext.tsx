import React, { createContext, useReducer } from 'react';
import type { ReactNode } from 'react';
import type { Todo } from '../types/Todo';

interface TodoState {
  todos: Todo[];
  filter: 'all' | 'completed' | 'incomplete';
}

interface TodoAction {
  type: 'ADD_TODO' | 'TOGGLE_TODO' | 'SET_FILTER';
  payload?: any;
}

const initialState: TodoState = {
  todos: [],
  filter: 'all',
};

const TodoContext = createContext<{
  state: TodoState;
  dispatch: React.Dispatch<TodoAction>;
  addTodo: (todo: Todo) => void;
  toggleTodo: (id: string) => void;
  setFilter: (filter: 'all' | 'completed' | 'incomplete') => void;
}>({
  state: initialState,
  dispatch: () => null,
  addTodo: () => null,
  toggleTodo: () => null,
  setFilter: () => null,
});

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (todo: Todo) => {
    dispatch({ type: 'ADD_TODO', payload: todo });
  };

  const toggleTodo = (id: string) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const setFilter = (filter: 'all' | 'completed' | 'incomplete') => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  return (
    <TodoContext.Provider value={{ state, dispatch, addTodo, toggleTodo, setFilter }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };