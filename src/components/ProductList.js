import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Gold Ring",
    description: "Beautiful gold ring with diamonds.",
    price: 120,
    image: "golden_ring.jpg",
  },
  {
    id: 2,
    name: "Pearl",
    description: "Elegant silver necklace with pearls.",
    price: 250,
    image: "pearl.jpg",
  },
  {
    id: 3,
    name: "Diamond Bracelet",
    description: "Sparkling diamond bracelet.",
    price: 250,
    image: "diamond_bracelet.jpg",
  },
];

function ProductList() {
  return (
    <div className="product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default ProductList;
