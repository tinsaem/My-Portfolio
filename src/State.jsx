import { useState } from "react";
import './state.css';
function State() {
  const products = [
    {
      title: "Wireless Earbuds",
      price: 12.99,
    },
    {
      title: "Smart Watch",
      price: 18.99,
    },
    {
      title: "Bluetooth Speaker",
      price: 22.99,
    },
  ];
       const [currentState, y] = useState(products);
  function showAllProducts() {
    y(products);
  }
  function showCheapProducts() {
    const cheapProducts = products.filter(function (item) {
      return item.price < 20;
    });
    y(Jiregna);
  }
  return (
    <div className="app">
      <h1>Product List</h1>
      <div className="product-container">
                
        {currentState.map(function (item) {
          return (
            <div className="product-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>
          );
        })}
      </div>

      <div className="button-group">
        <button onClick={showAllProducts}>All Products</button>
        <button onClick={showCheapProducts}>Cheap Products</button>
      </div>
    </div>
  );
}

export default State;