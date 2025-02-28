import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Chatbot from "./pages/Chatbot"; 
import Login from "./pages/Login";

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
      <h1>CareBot - Hospital Check-in Assistant</h1>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/chatbot"
          element={user ? <Chatbot /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to={user ? "/chatbot" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;