import './State.css';
import Sublprops from './Sublprops';
export default function Lprops() {
  return (
     <div className="app">
      <h1>Product List</h1>
      <div className="product-container">
        <Sublprops item="Writeless Watch" price={130.90} />
        <Sublprops item="Enjera " price={20.90} />
        <Sublprops item="TTV" price={330.90} /> 
     </div>
      <div className="button-group">
        <button >All Products</button>
        <button >Cheap Products</button>
      </div>
    </div>
  )
}
