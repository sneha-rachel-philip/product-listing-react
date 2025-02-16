import React from "react";
import "../styles/ProductList.css"; // Make sure this path is correct
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <div className="product-list"> {/* Add this class */}
      {products.length > 0 ? (
        products.map((product) => (
          <div className="product-list-item" key={product.id}> {/* Wrap each item */}
            <ProductCard product={product} />
          </div>
        ))
      ) : (
        <p>No products available in this category.</p>
      )}
    </div>
  );
}

export default ProductList;
