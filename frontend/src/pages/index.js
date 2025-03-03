// pages/index.js
import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import { auth } from "../firebase";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    const user = auth.currentUser;
    // Redirect user based on authentication
        if (user) {
        router.push('/chatbot');  // Redirect to chatbot if user is logged in
    } else {
        router.push('/login');  // Redirect to login page if user is not logged in
    }
  }, [router]);


  return (
    <div className="app-container">
      <h1>Welcome to Carebot!</h1>
      <p>Loading...</p> {/* This gives a loading state while redirecting */}
    </div>
  );
};

export default HomePage;
