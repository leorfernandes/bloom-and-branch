import React from 'react';
import ReactDOM from 'react-dom/client';

// Global styles
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Main application component
import App from './App';

// Context providers
import { CartProvider } from './context/CartContext';

// Create the root element for rendering the React app
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement // Ensure the root element exists in the HTML
);

// Render the application wrapped with necessary providers
root.render(
  <React.StrictMode>
    {/* CartProvider provides cart-related state and functionality */}
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);