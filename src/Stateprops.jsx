import ProductCard from "./ProductCard";
import "./State.css";
import { useState, useEffect } from "react";

export default function Stateprops() {
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setAllProducts(data);
        setDisplayedProducts(data);
      });
  }, []);

  function showAllProducts() {
    setDisplayedProducts(allProducts);
  }

  function showCheapProducts() {
    const cheapProducts = allProducts.filter(function (item) {
      return item.price < 20;
    });

    setDisplayedProducts(cheapProducts);
  }

  return (
    <div className="app">
      <h1>Product List</h1>

      <div className="product-container">
        {displayedProducts.map((item) => (
          <ProductCard key={item.id} title={item.title} price={item.price} />
        ))}
      </div>

      <div className="button-group">
        <button onClick={showAllProducts}>All Products</button>
        <button onClick={showCheapProducts}>Cheap Products</button>
      </div>
    </div>
  );
}

