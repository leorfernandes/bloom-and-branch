import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the shape of the Wishlist context
interface WishlistContextType {
    wishlist: any[]; // Array to store wishlist items
    addToWishlist: (product: any) => void; // Function to add a product to the wishlist
    removeFromWishlist: (id: number) => void; // Function to remove a product from the wishlist by ID
}

// Create the Wishlist context with an initial value of null
const WishlistContext = createContext<WishlistContextType | null>(null);

// Custom hook to access the Wishlist context
export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (!context) {
        // Ensure the hook is used within a WishlistProvider
        throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
};

// WishlistProvider component to wrap the application or part of it
export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Initialize wishlist from localStorage
    const [wishlist, setWishlist] = useState<any[]>(() => {
        const storedWishlist = localStorage.getItem('wishlist');
        return storedWishlist ? JSON.parse(storedWishlist) : [];
    });
    
    // Save wishlist to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);


    // Function to add a product to the wishlist
    const addToWishlist = (product: any) => {
        setWishlist((prevWishlist) => [...prevWishlist, product]);
    };

    // Function to remove a product from the wishlist by its ID
    const removeFromWishlist = (id: number) => {
        setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
    };

    return (
        // Provide the wishlist state and functions to the context
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};