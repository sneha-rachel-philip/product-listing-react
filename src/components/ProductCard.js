import React from "react";
import "../styles/ProductCard.css"; // Ensure this path is correct

function ProductCard({ product }) {
  return (
    <div className="product-card"> {/* Added class here */}
      <img src={product.image} alt={product.name} width="150" />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}

export default ProductCard;
