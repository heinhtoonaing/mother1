import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card border p-4">
      <img
        src={`/images/${product.image}`}
        alt={`${product.name} - ${product.description}`}
        className="product-image w-full h-48 object-cover mb-4"
      />
      <h3 className="product-name text-lg font-bold">{product.name}</h3>
      <p className="product-description text-sm text-gray-600">{product.description}</p>
      <p className="price text-primary mt-2">${product.price.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;
