import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: Add specific styles for Navbar

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Boundless Books</h1>
            <div className="navbar-links">
                <Link to="/" className="navbar-button">Home</Link> {/* Home button */}
            </div>
        </nav>
    );
};

export default Navbar;