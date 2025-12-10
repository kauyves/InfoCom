import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <div className="price">
        R$ {product.price.toFixed(2).replace('.', ',')}
      </div>
    </div>
  );
}

export default ProductCard;