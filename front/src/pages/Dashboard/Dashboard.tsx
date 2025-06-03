import { TodoProvider } from '../../context/ToDoContext';
import AddTodoForm from '@components/AddToDo';
import FilterTodos from '@components/FilterToDo';
import TodoTable from '@components/ToDoTable';
import '../../App.css';

function Dashboard() {

  return (
  <TodoProvider>
      <div className="app">
        <h1>To-Do List</h1>
        <AddTodoForm />
        <FilterTodos />
        <TodoTable />
      </div>
  </TodoProvider>
  )

}

export default Dashboard;