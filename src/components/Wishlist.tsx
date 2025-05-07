import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import Spinner from './Spinner';

const Wishlist: React.FC = () => {
    // State to manage loading status
    const [loading, setLoading] = useState(true);

    // Access wishlist data and remove function from context
    const { wishlist, removeFromWishlist } = useWishlist();

    // Simulate loading time for better user experience
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }, []);

    // Show spinner while loading
    if (loading) {
        return <Spinner />;
    }

    // Render wishlist items
    return ( 
        <div className="container py-5">
            {/* Page Title */}
            <h2 className="text-center mb-4 title-text">Your Wishlist</h2>

            {/* Display message if wishlist is empty */}
            {wishlist.length === 0 ? (
            <div className="text-center py-5">
            <p>Your wishlist is empty.</p>
            <Link to="/products" className="btn btn-pink">Browse Products</Link>
            </div>
        ) : (
            <div>
                {/* Wishlist Items Grid */}
                <div className="row">
                    {wishlist.map((product, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card h-100">
                                {/* Product Image */}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="card-img-top"
                                />
                                <div className="card-body">
                                    {/* Product Name */}
                                    <h5 className="card-title">{product.name}</h5>
                                    {/* Product Price */}
                                    <p className="card-text">{product.price}</p>
                                    {/* Product Description */}
                                    <p className="card-text">{product.description}</p>
                                    <div className="d-flex justify-content-between">
                                        {/* Link to Product Details */}
                                        <Link to={`/products/${product.id}`} className="btn-pink">
                                            View Details
                                        </Link>
                                        {/* Remove from Wishlist Button */}
                                        <button
                                            className="btn-remove text-right"
                                            onClick={() => removeFromWishlist(product.id)}
                                        >
                                            X
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}
        </div>
    );
};

export default Wishlist;