import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';

import { ToastContainer } from 'react-toastify';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("✅ Logged In");
        if (location.pathname === '/login') {
          navigate('/');
        }
      } else {
        console.log("🚫 Logged Out");
        if (location.pathname !== '/login') {
          navigate('/login');
        }
      }
      setAuthChecked(true); // Done checking auth
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [navigate, location.pathname]);

  if (!authChecked) {
    return <div className="loading-screen">Checking authentication...</div>; // Optional loading state
  }

  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
