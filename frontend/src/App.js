import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Chatbot from "./pages/Chatbot"; 
import Login from "./pages/Login";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="app-container">
      <h1 className="carebot-title">Carebot: Your Personal Health Assistant</h1>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/chatbot"
          element={user ? <Chatbot /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to={user ? "/chatbot" : "/login"} />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
}

export default App;