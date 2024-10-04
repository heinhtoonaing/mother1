import React from 'react';
import ProductList from '../components/ProductList';

const products = [
    { id: 1, name: 'Gold Necklace', description: 'Beautiful gold necklace with intricate design.', price: 120, image: 'golden_ring.jpg' },
    { id: 2, name: 'Diamond Ring', description: 'Sparkling diamond ring perfect for engagements.', price: 250, image: 'pearl.jpg' },
    { id: 3, name: 'Diamond Bracelet', description: 'Elegant diamond bracelet for special occasions.', price: 250, image: 'diamond_bracelet.jpg' },
    // Add more products here
];

const Shop = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-4 text-primary">Shop Our Jewelry Collection</h1>
            <p className="text-lg text-center mb-8">
                Discover our exquisite selection of handmade jewelry, crafted with love and attention to detail.
            </p>
            <ProductList products={products} />
        </div>
    );
};

export default Shop;
