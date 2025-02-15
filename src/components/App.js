import React, { useState } from "react";
import "../styles/App.css";
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
      <div>
        <h1>Product Store</h1>
        <CategoryFilter setSelectedCategory={setSelectedCategory} />
        <ProductList products={filteredProducts} />
      </div>
    );
};

export default App;
