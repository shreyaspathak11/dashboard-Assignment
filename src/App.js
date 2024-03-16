import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { useContext } from 'react';
import { AuthContext } from './authContext/AuthContext';

function App() {

  const { user } = useContext(AuthContext)

  return (
    <div className="App">
      <Router >
        <Routes>
        (user===null  ? (
          <Route path="/" element={<Login />} />
        ) : (
          <Route path="/dashboard" element={<Dashboard />} />
        )
        <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
