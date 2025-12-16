import { FaShoppingCart } from "react-icons/fa";
import './Navbar.css';

export default function Navbar() {
    return (
        <header className="navbar">
            <h1 className="logo">
                <a href="/"><span>Info</span></a>
            </h1>

            <nav>
                <button className="cart-btn">
                    <FaShoppingCart size={20} />
                </button>

                <button className="login-btn">Entrar</button>
            </nav>
        </header>
    );
}