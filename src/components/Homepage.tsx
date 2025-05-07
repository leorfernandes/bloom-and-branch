import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/productData';
import Spinner from './Spinner';

const Homepage: React.FC = () => {
    // State to manage loading status
    const [loading, setLoading] = useState(true);

    // Simulate loading time with a timeout
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }, []);

    // Show spinner while loading
    if (loading) {
        return <Spinner />;
    }

    return (
        <div className="container">
            {/* Hero Section */}
            <section className="text-center py-5">
                <div className="container">
                    <h1 className="display-4 title-text">Welcome to Bloom & Branch</h1>
                    <p className="lead">Artisanal flower arrangements for every occasion.</p>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Featured Products</h2>
                    <div className="row">
                        {/* Map through products and display only featured ones */}
                        {products.map((product) =>
                            product.featured ? (
                                <div key={product.id} className="col-md-4 mb-4">
                                    <div className="card h-100">
                                        {/* Product Image */}
                                        <img
                                            src={product.image}
                                            className="card-img-top"
                                            loading="lazy"
                                            alt={product.name}
                                        />
                                        <div className="card-body">
                                            {/* Product Name */}
                                            <h5 className="card-title">{product.name}</h5>
                                            {/* Product Price */}
                                            <p className="card-text">{product.price}</p>
                                            {/* Link to Product Details */}
                                            <Link to={`/products/${product.id}`} className="btn-pink">
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Homepage;