import React, { useState } from 'react';
import { registerUser, signInUser } from './firebase';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRegister = async () => {
    try {
      await registerUser(email, password);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  const handleLogin = async () => {
    try {
      await signInUser(email, password);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome, {email}!</h1>
      ) : (
        <div>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleRegister}>Register</button>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
