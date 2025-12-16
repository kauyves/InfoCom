import { useState } from "react";
import ProductList from "./../components/ProductList";
import Button from "./../components/Button";
import SearchBar from "./../components/SearchBar";
import { useSearch } from "./../hooks/useSearch";
import { useProducts } from "./../hooks/useProducts";

const ITEMS_PER_PAGE = 8; // mostra 8 itens por vez

function Home() {
  const { products, loading, error } = useProducts(); // usa o hook personalizado
  const [visibleCount, setVisible] = useState(ITEMS_PER_PAGE); // quantos estão visíveis
  const { query, setQuery, filtered } = useSearch(products); // usa o hook de busca

  const handleLoadMore = () => {
    setVisible((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <>
      {loading && <p>Carregando produtos...</p>}

      {error && <div className='error'>{error}</div>}

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
    </>
  );
}

export default Home;