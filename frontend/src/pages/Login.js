import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authServices';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ Fix typo
    try {
      await loginUser({ email, password });
      navigate('/');
    } catch (error) {
      setErrorMsg(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>  {/* ✅ Fix typo */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // ✅ Fix binding
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // ✅ Fix binding
        />
        <button type="submit">Login</button>
        {errorMsg && <p>{errorMsg}</p>}
      </form>
    </div>
  );
};

export default Login;
