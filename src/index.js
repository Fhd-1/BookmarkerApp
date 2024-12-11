import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App.jsx'; // Ensure the App component is imported correctly
import './index.css'; // Import global styles if any

// Select the root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
