import './product.css';
function ProductCard({key,image,title,category,price}){ 
  return (
<div className="product-card" key={key}>
            <img src={image}  width="120" />
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <p>Category: {category}</p>
          
         </div>
  )
}
export default ProductCard;