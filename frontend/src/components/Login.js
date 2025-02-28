import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setUserRole }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // React Router navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.role);
      setUserRole(res.data.role);

      alert(`Login Successful as ${res.data.role}`);

      // Redirect based on role
      if (res.data.role === 'admin') {
        navigate('/admin/dashboard');
      } else if (res.data.role === 'staff') {
        navigate('/staff/home');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error(error.response?.data?.message || 'Login failed');
      alert(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
