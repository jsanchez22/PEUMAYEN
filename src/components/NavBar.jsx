import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";

export const Navbar = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
  return (
    <nav>
      <div className="nav-primary">
      <img className="logo-page" src="/images/logo.png"/>
      <Link to={"/"} className="link">
        <h2 className="title-page">PEUMAYEN</h2>
      </Link>
        <Link to={"/cart"} className="cart-icon link">
          <div>
            Carrito: <span className="cart-count">{quantity}</span>
          </div>
        </Link>
      </div>
      <div className="nav-secondary">
          <ul className="menu">
          <Link to={"/"} className="link" ><li>Inicio</li> </Link>
          <Link to={"/quienes-somos"} className="link"> <li>Quienes Somos</li> </Link>
          <Link to={"/contact"} className="link"> <li>Contacto</li> </Link>
          </ul>
      </div>
    </nav>
  );
};
