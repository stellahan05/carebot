// pages/_app.js
import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import '../../styles/app.css';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="app-container">
        <h1> Carebot: Your Personal Health Assistant</h1>
        <Component {...pageProps} user={user} />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </>
  );
}

export default MyApp;