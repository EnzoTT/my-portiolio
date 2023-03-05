import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import ThemeContextProvider from './hooks/useTheme';

// IntersectionObserver

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);

