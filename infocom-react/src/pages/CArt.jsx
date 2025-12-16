import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/FormatPrice";
import Button from "../components/Button";
import "./Cart.css";

export default function Cart() {
  const { items, totalItems, totalPrice, updateQuantity, removeItem } = useCart();

  // Verifica se há itens no carrinho
  const hasItems = items.length > 0;

  // Renderização da página com base no estado do carrinho
  return (
    <main className="cart-page">
      <h2>Carrinho de Compras</h2>

      { /** Se não houver itens, mostrar mensagem de carrinho vazio */ }
      {!hasItems && (
        <div className="cart-empty">
          <p>Seu carrinho está vazio.</p>
          <Link to='/'>
            <Button>Voltar para o catálogo</Button>
          </Link>
        </div>
      )}

      { /** Se houver itens, mostrar a lista de produtos no carrinho */ }
      {hasItems && (
        <>
          <section className="cart-list">
            {items.map((item) => (
              <article key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                  />

                  <div className="cart-item-details">
                    <h3>{item.product.title}</h3>

                    <div className="cart-qty">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="cart-remove"
                      onClick={() => removeItem(item.id)}
                    >
                      Remover
                    </button>
                  </div>
                </div>

                <div className="cart-item-price">
                  {formatPrice(item.product.price * item.quantity)}
                </div>
              </article>
            ))}
          </section>

          <section className="cart-summary">
            <div className="cart-summary-total">
              <span>Total ({totalItems} itens)</span>
              <strong>{formatPrice(totalPrice)}</strong>
            </div>

            <div className="cart-summary-actions">
              <Button
                className='btn-default'
                onClick={() => alert("Pedido finalizado (simulação)!")}
              >
                Finalizar pedido
              </Button>

              { /** Botão para continuar comprando, que leva de volta ao catálogo */ }
              <Link to='/' className="btn-default btn-secondary">
                Continuar comprando
              </Link>
            </div>
          </section>
        </>
      )}
    </main>
  );
}