import logo from './logo.svg';
import './App.css';

import TodoList from './components/TodoList';
import List from './components/List';

function App() {
  return (
    <>
       <TodoList />
       <List />
    </>
  );
}
import { UserList } from './services/UserList';
import AddUser from './services/AddUser';

function App() {
  return (
    <div className="App">
      <h1>App</h1>

      <UserList />
      <AddUser />
    </div>
  );
}




export default App;
