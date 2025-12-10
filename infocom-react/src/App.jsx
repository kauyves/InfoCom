import { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import Button from './components/Button';
import './App.css';

const ITEMS_PER_PAGE = 8;     // mostra 8 itens por vez

function App() {
  const [products, setProducts]      = useState(null);          // lista completa
  const [loading, setLoading]        = useState(true);        // estado de carregando
  const [error, setError]            = useState(null);        // mensagem de erro
  const [visibleCount, setVisible]   = useState(ITEMS_PER_PAGE); // quantos estão visíveis

  // Fetch(nome da API) dos produtos
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts)
      .catch(() => setError("Erro ao carregar produtos."))
      .finally(() => setLoading(false));
  }, []);

  const handleLoadMore = () => {
    setVisible((prev) => prev + ITEMS_PER_PAGE);
  };
  
  return (
    <main>
      {loading && <p>Carregando produtos...</p>}

      {error && <div className='error'>{error}</div>}

      {products && (
        <>
          <ProductList products={products.slice(0, visibleCount)} />

          <Button
            onClick={handleLoadMore}
            disabled={visibleCount >= products.length}
          >
            {visibleCount >= products.length
              ? "Fim dos produtos"
              : "Carregar Mais"}
          </Button>
        </>
      )}
    </main>
  );
}

export default App
