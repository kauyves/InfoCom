import './ProductCard.css';
import { useNavigate } from "react-router-dom";

function ProductCard({ product, detailedView = false }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Só navega se não estivermos na página de detalhes
    if (!detailedView) {
      navigate(`/products/${product.id}`);
    }
  };

  return (
    <div className='card' onClick={handleClick}>
      <img src={product.image} alt={product.title} />

      <div className='separator'></div>

      <div className='price'>R$ {product.price.toFixed(2).replace(".", ",")}</div>

      <h3>{product.title}</h3>

      {detailedView && (
        <>
          <p className='product-description'>{product.description}</p>

          <span className='product-category'>{product.category}</span>
        </>
      )}
    </div>
  );
}

export default ProductCard;