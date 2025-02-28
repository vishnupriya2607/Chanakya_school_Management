import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

const App = () => {
  const [userRole, setUserRole] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setUserRole={setUserRole} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
