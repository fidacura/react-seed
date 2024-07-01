// src/AppRouter.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage';
import About from './pages/About';

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home title="Welcome to our future Homepage." />}
      />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRouter;
