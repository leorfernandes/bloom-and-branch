import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import Spinner from './Spinner';

const Checkout: React.FC = () => {
    // Access cart items and clearCart function from context
    const { cartItems, clearCart } = useCart();

    // State to manage form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
    });

    // State to manage loading spinner
    const [loading, setLoading] = useState(true);

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

    // Handle input changes in the form
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Thank you for your order, ${formData.name}!`);
        clearCart(); // Clear the cart after successful checkout
    };

    return (
        <div className="container py-5">
            <h2 className="text-center mb-4 title-text">Checkout</h2>

            {/* Show message if cart is empty */}
            {cartItems.length === 0 ? (
                <p className="text-center">
                    Your cart is empty. Please add items to your cart before checking out.
                </p>
            ) : (
                <div>
                    {/* Order Summary Section */}
                    <h4>Order Summary</h4>
                    <ul className="list-group mb-4">
                        {cartItems.map((item) => (
                            <li
                                key={item.id}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                {item.name} (x{item.quantity})
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                    <h5 className="text-end">Total: ${totalPrice.toFixed(2)}</h5>

                    {/* Billing Information Form */}
                    <h4 className="mt-4">Billing Information</h4>
                    <form onSubmit={handleSubmit}>
                        {/* Name Input */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        {/* Email Input */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        {/* Address Input */}
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                className="form-control"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn-pink">
                            Place Order
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Checkout;