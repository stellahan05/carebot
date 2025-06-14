// pages/index.js
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const HomePage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            router.push('/chatbot');  // Redirect to chatbot if user is logged in
        } else {
            router.push('/login');  // Redirect to login page if user is not logged in
        }

        setLoading(false);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [router]);

  if (loading) {
    return (
        <div className="app-container">
          <h1>Welcome to Carebot!</h1>
          <p>Loading...</p> {/* This gives a loading state while redirecting */}
        </div>
      );
  }

  return null;

};

export default HomePage;