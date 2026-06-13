
import ProductCard from './ProductCard';
import './State.css';
export default function Props() {
  return (
    <div className="app">
      <h1>Product List</h1>
      <div className="product-container">
        <ProductCard title="Wireless Earbuds" price={12.99} />
        <ProductCard title="Smart Watch" price={18.99}/>
        <ProductCard title="Bluetooth Speaker" price={22.99}/> 
      </div>
      <div className="button-group">
        <button >All Products</button>
        <button >Cheap Products</button>
      </div>
    </div>
  )
}
