import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({ products }) {
  return (
    <div className="grid">
      {products.map((prod) => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </div>
  );
}

export default ProductList;