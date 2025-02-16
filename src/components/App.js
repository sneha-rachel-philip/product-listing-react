import React, { useState } from "react";
import "../styles/App.css"; // Ensure correct path
import ProductList from "./ProductList";
import CategoryFilter from "./CategoryFilter";
import productsData from "../data/products.json";

const App = () => {
  const [products] = useState(productsData);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="app-container"> {/* Added class here */}
      <h1>Product Store</h1>
      <CategoryFilter setSelectedCategory={setSelectedCategory} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
