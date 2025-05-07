import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

const ShoppingCart: React.FC = () => {
    // State to manage loading spinner visibility
    const [loading, setLoading] = useState(true);

    // Access cart items and remove function from CartContext
    const { cartItems, removeFromCart } = useCart();

    // Simulate loading time for better user experience
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }, []);

    // Show spinner while loading
    if (loading) {
        return <Spinner />;
    }

    // Calculate total price of items in the cart
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className="container py-5">
            {/* Page Title */}
            <h2 className="text-center mb-4 title-text">Shopping Cart</h2>

            {/* Display message if cart is empty */}
            {cartItems.length === 0 ? (
                <div className="text-center py-5">
                    <p>Your cart is empty.</p>
                    <Link to="/products" className="btn btn-pink">Start Shopping</Link>
                </div>
            ) : (
                <div>
                    {/* Cart Items Table */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>{item.quantity}</td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    <td>
                                        {/* Remove item from cart */}
                                        <button
                                            className="btn-remove"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            X
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Total Price */}
                    <h4 className="text-end">Total: ${totalPrice.toFixed(2)}</h4>

                    {/* Checkout Link */}
                    <div className="text-end">
                        <Link to="/checkout" className="text-black">
                            Checkout
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;