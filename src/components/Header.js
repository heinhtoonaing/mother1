// components/Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css'; // Ensure this CSS file exists

const Header = () => {
    const location = useLocation();

    // Hide header on the shop page
    if (location.pathname === '/shop') {
        return null; // Return nothing if we're on the shop page
    }

    return (
        <header className="bg-gray-800 text-white p-4 text-center">
            <h1 className="text-2xl">NoeNoe Jewelry Shop</h1>
            <nav className="mt-4">
                <ul className="flex justify-center space-x-6">
                    <li>
                        <Link to="/" className="text-white hover:underline">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop" className="text-white hover:underline">Shop</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-white hover:underline">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-white hover:underline">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
