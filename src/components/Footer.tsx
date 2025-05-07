import React from 'react';

/**
 * Footer Component
 * This component renders the footer section of the application.
 * It includes copyright information and links to GitHub and LinkedIn profiles.
 */
const Footer: React.FC = () => {
    return (
        <footer className="footer bg-dark text-white py-3">
            <div className="container text-center">
                {/* Copyright Information */}
                <p>&copy; 2025 Leonardo dos Reis Fernandes. All rights reserved.</p>
                
                {/* Social Media Links */}
                <p>
                    <a 
                        href="https://github.com/leorfernandes" 
                        className="text-white me-3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/leorfernandes/" 
                        className="text-white" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </p>
                <p>This is a mockup website for demonstration purposes only. No real transactions will occur.</p>
            </div>
        </footer>
    );
};

export default Footer;