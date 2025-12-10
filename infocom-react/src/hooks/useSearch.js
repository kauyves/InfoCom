import { useState, useMemo } from "react";

export function useSearch(products) {
  const [query, setQuery] = useState("");

  // Filtragem com memoização (otimização)
  const filtered = useMemo(() => {
    if (!query) return products;
    return products.filter(p =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [products, query]);

  return { query, setQuery, filtered };
}