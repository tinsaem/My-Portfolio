import './Product.css';
import ProductCard from './ProductCard';
import {useEffect, useState} from 'react';
export default function Products() {
    const [products, setProducts] = useState([]);
    const [cheapProducts,setCheapProducts]=useState([]);
      useEffect(() => {
            fetch("https://fakestoreapi.com/products")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                setProducts(data);
            })
            .catch(function (error) {
                console.log("Error:", error);
                        });
            }, []);

             function showAllProducts() {
    setProducts(products);
  }
  function showCheapProducts() {
    const cheapProducts = products.filter(function (item) {
      return item.price < 20;
    });

    setCheapProducts(cheapProducts);
  }
  return (
    <>
     <div className="app">
      <h1>Product List</h1>
      <div className="product-container">
         {products.map((item) => (
            <ProductCard key={item.id} image={item.image} title={item.title} price={item.price} category={item.category} /> 
       ))}
      </div>
          <div className="button-group">
       <button onClick={showAllProducts}>All Products</button>
        <button onClick={showCheapProducts}>Cheap Products</button>
      </div>
    </div>
    </>
  )
}
