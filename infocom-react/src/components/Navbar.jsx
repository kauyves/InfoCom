import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";
import "./Navbar.css";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <header className="navbar">
      <h1 className="logo">
        <Link to="/">
          <span>Info</span>Com
        </Link>
      </h1>

      <nav>
        <Link to="/cart" className="cart-btn">
          <FaShoppingCart size={20} />
          {totalItems > 0 && (
            <span className="cart-badge">{totalItems}</span>
          )}
        </Link>

        <button className="login-btn">
          Entrar
        </button>
      </nav>
    </header>
  );
}