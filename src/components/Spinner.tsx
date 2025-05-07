import React from 'react';

// Spinner component to display a loading indicator
const Spinner: React.FC = () => {
    return (
        <div className="container">
            {/* Wrapper for the spinner */}
            <div className="spinner">
                {/* Bootstrap spinner with a custom logo */}
                <div className="spinner-border text-danger" role="status">
                    {/* Logo displayed inside the spinner */}
                    <img 
                        src="/images/icons/logo.png" 
                        alt="Loading..." 
                        className="app-logo" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Spinner;