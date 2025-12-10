import { useState } from 'react'
import './App.css'
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0)

  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch(nome da API) dos produtos
useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then(setProducts)
    .catch(() => setError("Erro ao carregar produtos."))
    .finally(() => setLoading(false));
}, []);

  return (
    <main>
      <h1>
        Catálogo de Produtos
      </h1>
    </main>
  )
}

export default App
