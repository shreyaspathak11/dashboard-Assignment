import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { useContext } from 'react';
import { AuthContext } from './authContext/AuthContext';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        <Routes>
         
          {user === null && <Route path="*" element={<Navigate to="/" replace />} />}
 
          {user !== null && <Route path="*" element={<Navigate to="/dashboard" replace />} />}
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
