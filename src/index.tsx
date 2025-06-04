import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'
// import './i18n'; // Initialize i18next - Temporarily commented out
import './index.css'; // Include global styles and Tailwind

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  // <React.StrictMode> // Temporarily commented out
    <App />
  // </React.StrictMode>
);
