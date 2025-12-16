import './ProductCard.css';
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };
  return (
    <div className='card'>
      <img src={product.image} alt={product.title} />

      <div className='separator'></div>

      <div className='price'>R$ {product.price.toFixed(2).replace(".", ",")}</div>

      <h3>{product.title}</h3>
    </div>
  );
}

export default ProductCard;