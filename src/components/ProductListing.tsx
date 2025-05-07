import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/productData';
import Spinner from './Spinner';

const ProductListing: React.FC = () => {
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
        <div className="container py-5">
            {/* Page title */}
            <h1 className="text-center mb-4 title-text">Our Products</h1>
            
            {/* Product grid */}
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            {/* Product image */}
                            <img 
                                src={product.image} 
                                className="card-img-top" 
                                loading="lazy" 
                                alt={product.name} 
                            />
                            
                            {/* Product details */}
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-title">{product.name}</p>
                                <Link to={`/products/${product.id}`} className="btn-pink">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListing;