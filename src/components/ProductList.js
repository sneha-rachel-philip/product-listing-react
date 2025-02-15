import React from "react";
import "../styles/ProductList.css";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <div>
      {products.length > 0 ? (
        products.map((product) => <ProductCard key={product.id} product={product} />)
      ) : (
        <p>No products available in this category.</p>
      )}
    </div>
  );
}

export default ProductList;
