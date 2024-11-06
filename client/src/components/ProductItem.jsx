import logo from '../images/logo.jpg'
export default function ProductItem({ product }) {
  return (
    <li className="product-item">
      <article>
        <img src={logo} alt={product.name} />
        <div>
          <h3>{product.name}</h3>
          <p className="product-item-price">${product.price}</p>
          <p className="product-item-description">{product.description}</p>
        </div>
          <button className="product-item-actions">Add to Cart</button>
        
      </article>
    </li>
  );
}
