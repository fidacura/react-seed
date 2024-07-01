// src/App.js
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import './styles.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <Navbar />
        <AppRouter />
      </Router>
    </ThemeProvider>
  </StrictMode>
);
