import React from 'react';

const Home = () => {
    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold text-center mb-6 text-primary">Welcome to Mom's Jewelry Shop</h1>
            <p className="text-lg text-center mb-8">
                Explore our exclusive collection of handmade jewelry crafted with love.
            </p>

            <div className="flex flex-col items-center mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-secondary">Our Story</h2>
                <p className="text-md leading-relaxed text-center max-w-2xl mb-4">
                    At Mom's Jewelry Shop, we believe in the beauty of craftsmanship and individuality. 
                    Our family has been creating exquisite jewelry for over 10 years.
                </p>
                <button className="button">Learn More</button>
            </div>

            <div className="flex flex-col items-center mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-secondary">Featured Collections</h2>
                <p className="text-md leading-relaxed text-center max-w-2xl mb-4">
                    Check out our collections for something special, whether timeless or trendy.
                </p>
                <button className="button">Shop Now</button>
            </div>

            <div className="flex flex-col items-center mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-secondary">Why Choose Us?</h2>
                <ul className="list-disc list-inside text-md text-center max-w-2xl">
                    <li>Handmade and Custom Designs</li>
                    <li>Top-Quality Materials</li>
                    <li>Perfect for Gifts or Special Occasions</li>
                    <li>Dedicated Customer Service</li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
