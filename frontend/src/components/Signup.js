import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('staff'); // Default role

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', {
        name,
        email,
        password,
        role,
      });
      alert(res.data.message);
    } catch (error) {
      console.error(error.response?.data?.message || 'Signup failed');
      alert(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="staff">Staff</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
