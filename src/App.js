import './App.css';
import Nav from './components/Navbar';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Nav />    
      <Dashboard />
      <Login />
      <Signup />
    </div>
  );
}

export default App;
