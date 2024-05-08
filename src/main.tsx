// Import necessary modules from React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the main App component and CSS file
import App from './App.tsx';
import './index.css';

// Render the root component using ReactDOM.createRoot
// StrictMode is used to highlight potential problems in an application
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App /> {/* Render the main App component */}
  </React.StrictMode>,
);
