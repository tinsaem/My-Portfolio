import './Product.css';
import { useState, useEffect } from "react"
function Product()
{
    const [products, setProducts]=useState([]);
    const [cheapproducts, setCheapProducts]=useState([]);
   useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            setProducts(data); 
            setCheapProducts(data);      
        })
        .catch(function (error) {
            console.log("Error:", error);
        });
   },[] );
   

   function allProduct(){
     setCheapProducts(products);
   }
   function cheapProduct(){
      const cheapProducts = products.filter(function (item) {
      return item.price < 10;
    });

    setCheapProducts(cheapProducts);
   }
  return (
            <>
              <h1>Product List</h1>
                <div className="product-container">
                    {cheapproducts.map((item) => (
                        <div className="product-card" key={item.key}>
                            <img src={item.image}  width="120" />
                            <h3>{item.title}</h3>
                            <p>Price: ${item.price}</p>
                            <p>Category: {item.category}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <button onClick={allProduct}>All Products</button>
                    <button onClick={cheapProduct}>Cheap Products</button>
                </div>
            </>
                        
         )
}
export default Product;
