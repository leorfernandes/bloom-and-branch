import React, { createContext, useState, useContext, useEffect } from 'react';

// Define the structure of a cart item
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// Define the structure of the CartContext
interface CartContextType {
  cartItems: CartItem[]; // List of items in the cart
  addToCart: (item: CartItem) => void; // Function to add an item to the cart
  removeFromCart: (id: number) => void; // Function to remove an item from the cart
  clearCart: () => void; // Function to clear all items from the cart
}

// Create the CartContext with an initial undefined value
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider component to wrap the application and provide cart state
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State to hold the cart items, initialized from local storage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : []; // Parse stored cart or initialize as empty
  });

  // Effect to save the cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add an item to the cart
  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        // If the item already exists, update its quantity
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      // If the item doesn't exist, add it to the cart
      return [...prevItems, item];
    });
  };

  // Function to remove an item from the cart by its ID
  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Provide the cart state and actions to the children components
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};