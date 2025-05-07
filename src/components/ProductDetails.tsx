import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import products from '../data/productData';
import Spinner from './Spinner';

const ProductDetails: React.FC = () => {
    // Extract the product ID from the URL parameters
    const { id } = useParams<{ id: string }>();

    // Context hooks for cart and wishlist functionality
    const { addToCart } = useCart();
    const { addToWishlist } = useWishlist();

    // State to manage loading status
    const [loading, setLoading] = useState(true);

    // Find the product by ID from the product data
    const product = products.find((product) => product.id === id);

    // Simulate a loading delay (e.g., for fetching data)
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }, []);

    // Show a spinner while loading
    if (loading) {
        return <Spinner />;
    }

    // Handle case where the product is not found
    if (!product) {
        return <h2 className="text-center">Product not found</h2>;
    }

    // Add product to cart and show a success toast
    const handleAddToCart = () => {
        addToCart({
            id: parseInt(product.id),
            name: product.name,
            price: parseFloat(product.price.replace('$', '')),
            quantity: 1,
        });
        toast.success('Product added to cart!');
    };

    // Add product to wishlist and show a success toast
    const handleAddToWishlist = () => {
        addToWishlist(product);
        toast.success('Product added to wishlist!');
    };

    return (
        <div className="container py-5">
            <div className="row">
                {/* Product Image Section */}
                <div className="col-md-6">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid"
                    />
                </div>

                {/* Product Details Section */}
                <div className="col-md-6">
                    <h2 className="title-text">{product.name}</h2>
                    <p className="text-muted">{product.price}</p>
                    <p>{product.description}</p>

                    {/* Add to Cart Button */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <button
                            className="btn-pink"
                            onClick={handleAddToCart}
                            aria-label="Add to Cart"
                        >
                            Add to Cart
                        </button>
                    </div>

                    {/* Add to Wishlist Button */}
                    <div>
                        <button
                            className="btn-pink"
                            onClick={handleAddToWishlist}
                            aria-label="Add to Wishlist"
                        >
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;