import './App.css';
import Nav from './components/Navbar';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Nav />    
      <Dashboard />
      {/* <Login />
      <Signup /> */}
    </div>
  );
}

export default App;
