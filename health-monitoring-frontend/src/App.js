// src/App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import usePageTransition from './usePageTransition';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);  // Add this line

  usePageTransition(setLoading);

  return (
    <div>
      <Navbar />
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />  {/* Pass user as a prop */}
        <Route path="/login" element={<Login setUser={setUser} />} />  {/* Pass setUser as a prop */}
        <Route path="/register" element={<Register setUser={setUser} />} />  {/* Pass setUser as a prop */}
        <Route path="/profile" element={<Profile user={user} />} />  {/* Pass user as a prop */}
      </Routes>
    </div>
  );
};

export default App;
