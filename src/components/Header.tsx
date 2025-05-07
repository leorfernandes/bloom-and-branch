import React from 'react';
import { Link } from 'react-router-dom';

// Header component for the application
const Header: React.FC = () => {
    return (
        <header className="text-black py-3 app-header">
            <div className="container d-flex justify-content-between align-items-center">
                {/* Logo and branding section */}
                <div className="d-flex align-items-center">
                    <img 
                        src="/images/icons/logo.png" 
                        alt="Logo" 
                        className="app-logo me-3 img-fluid" 
                        loading="lazy" // Improves performance by lazy-loading the image
                    />
                    <div>
                        <h1 className="mb-0 title-text">Bloom & Branch</h1>
                        <p className="mb-0 body-text">
                            Artisanal flower arrangements for every occasion.
                        </p>
                    </div>
                </div>

                {/* Navigation links */}
                <nav>
                    <Link to="/" className="text-black me-3 title-text">Home</Link>
                    <Link to="/products" className="text-black me-3 title-text">Products</Link>
                    <Link to="/cart" className="text-black me-3 title-text">Cart</Link>
                    <Link to="/wishlist" className="text-black title-text">Wishlist</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;