import logo from './logo.svg';
import './App.css';
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
