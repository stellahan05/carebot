import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "../firebase";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("Account created! You are now logged in.");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Logged in successfully!");
      }
      navigate("/chatbot");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.info("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>{isRegister ? "Sign Up" : "Login"}</h2>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        />
      <button onClick={handleSignIn}>{isRegister ? "Sign Up" : "Sign In"}</button>
      <button onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "Already have an account? Login" : "Need an account? Sign Up"}
      </button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Login;
