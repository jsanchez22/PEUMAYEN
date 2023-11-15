import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

export const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.Precio,
    0
  );

  return (
    <div className="cart-container">
      <div>
        
        {cart.length > 0 ? (
          <div>
          <div className="precio-total">Carrito-productos: {quantity} u.</div>
        <table>
    <thead>
      <tr>
        <th>Producto</th>
        <th>Cantidad</th>
        <th>Precio Unitario</th>
        <th>Precio Total</th>
      </tr>
    </thead>
    <tbody>
        {cart.map((product, idx) => (
          <tr key={idx}>
        <td>{product.titulo}</td>
        <td>{product.quantity}</td>
        <td>${product.Precio}</td>
        <td>${product.Precio*product.quantity}</td>
      </tr>
        
      ))}
      </tbody>
  </table>
  <div className="comprar">
        <label className="precio-total">Total: ${totalPrice}</label><br/>
        <label>Ingresar correo para continuar con la compra</label><br/>
        <input type="email" className="mail" placeholder="ingresar correo" name="email"></input><br/>
        <button className="boton-compra" onClick={() => console.log(cart)}>COMPRAR</button>
        </div>
        </div>
  ) : (
      <div className="carrito-vacio">
        <label>El carrito está vacío.</label>          
        <br/>
        <label>Agrega productos para continuar.</label>
      </div>
    )}
        
      </div>
    </div>
  );
};
