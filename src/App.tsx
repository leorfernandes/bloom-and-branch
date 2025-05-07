import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Component Imports
import Homepage from './components/Homepage';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import Wishlist from './components/Wishlist';
import Header from './components/Header';
import Footer from './components/Footer';

// Context Provider
import { WishlistProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext';

// Styles
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Provide Cart Context to the entire application */}
      <CartProvider>

      {/* Provide Wishlist Context to the entire application */}
      <WishlistProvider>

        {/* Toast notifications container */}
        <ToastContainer />

        {/* Router for managing application routes */}
        <Router>
          {/* Header component */}
          <Header />

          {/* Main content area */}
          <div className="store-background">
            <Routes>
              {/* Define application routes */}
              <Route path="/" element={<Homepage />} />
              <Route path="/products" element={<ProductListing />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/wishlist" element={<Wishlist />} />
              {/* Add additional routes here as needed */}
            </Routes>
          </div>

          {/* Footer component */}
          <Footer />
        </Router>
      </WishlistProvider>
      </CartProvider>
    </div>
  );
};

export default App;