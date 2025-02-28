import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created! You are now logged in.");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Logged in successfully!");
      }
      navigate("/chatbot");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <div>
      <h2>{isRegister ? "Sign Up" : "Login"}</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignIn}>{isRegister ? "Sign Up" : "Sign In"}</button>
      <button onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "Already have an account? Login" : "Need an account? Sign Up"}
      </button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Login;
