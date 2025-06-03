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

// Données fictives pour initialiser le state
const initialTodos: Todo[] = [
  { id: '1', label: 'Buy groceries', tag: 'Personal', deadline: new Date(2025, 4, 30), completed: false },
  { id: '2', label: 'Finish project', tag: 'Work', deadline: new Date(2025, 5, 5), completed: true },
  { id: '3', label: 'Call mom', tag: 'Personal', deadline: new Date(2025, 5, 1), completed: false },
  { id: '4', label: 'Team meeting', tag: 'Work', deadline: new Date(2025, 5, 2), completed: true },
  { id: '5', label: 'Gym session', tag: 'Health', deadline: new Date(2025, 5, 3), completed: false },
  { id: '6', label: 'Read a book', tag: 'Personal', deadline: new Date(2025, 5, 4), completed: false },
  { id: '7', label: 'Submit report', tag: 'Work', deadline: new Date(2025, 5, 6), completed: true },
  { id: '8', label: 'Plan vacation', tag: 'Personal', deadline: new Date(2025, 5, 7), completed: false },
];

const initialState: TodoState = {
  todos: initialTodos,
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