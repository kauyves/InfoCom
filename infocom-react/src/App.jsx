import { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import Button from './components/Button';
import './App.css';
import SearchBar from "./components/SearchBar";
import { useSearch } from "./hooks/useSearch";
import Navbar from "./components/Navbar";

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
  
  const { query, setQuery, filtered } = useSearch(products);

  return (
    <>
    <Navbar />
      <main>
        { /*... código existente */ }
        {products && (
          <>
            <SearchBar value={query} onChange={setQuery} />
            <ProductList products={filtered.slice(0, visibleCount)} />

            <Button
              onClick={handleLoadMore}
              disabled={visibleCount >= filtered.length}
            >
              {visibleCount >= filtered.length
                ? "Fim dos produtos"
                : "Carregar Mais"}
            </Button>
          </>
        )}
      </main>
    </>
  );
}

export default App
