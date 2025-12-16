// Código existente

export function useProduct(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct)
      .catch(() => setError("Erro ao carregar detalhes do produto."))
      .finally(() => setLoading(false));
  }, [id]);

  return { product, loading, error };
}