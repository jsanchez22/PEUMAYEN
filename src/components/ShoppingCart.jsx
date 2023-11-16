import React, { useContext } from "react";

import { useNavigate } from 'react-router-dom';

import { CartContext } from "../contexts/ShoppingCartContext";

export const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);
  const navigate = useNavigate();

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.Precio,
    0
  );
  function enviarDatos() {
    
    const nombre = document.querySelector('input[name="nombre"]').value;
    const email = document.querySelector('input[name="email"]').value;
    if (nombre.trim() === '' || email.trim() === '') {
      alert('Por favor, completa tu nombre y correo.');
      return;
    }

    const enviar = cart.map((objeto) => {
      return {
        pk_articulo: objeto.pk_articulos,
        precio: parseFloat(objeto.Precio),
        cantidad: objeto.quantity,
      };
    });
    const data = {
      carrito: enviar,
      name: nombre,
      email: email,
    };

    console.log(data);
    
    // URL del servidor
    const url =
      "https://merakicodelabs.com/Tesis/Entradas/Controllers/ArticulosController.php";

    const opciones = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(url, opciones)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Error al enviar la solicitud. Código de estado: ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log("Datos enviados con éxito:", data);
      })
      .catch((error) => {
        console.error("Error al enviar datos:", error);
      });
    setCart([]);
    navigate('/compra');
    }

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
                    <td>${product.Precio * product.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="comprar">
              <label className="precio-total">Total: ${totalPrice}</label>
              <br />
              <label>Ingresar su Nombre y apellido</label>
              <br />
              <input
                type="text"
                className="mail"
                placeholder="ingresar nombre y apellido"
                name="nombre"
                required
              ></input>
              <br />
              <label>Ingresar correo para continuar con la compra</label>
              <br />
              <input
                type="email"
                className="mail"
                placeholder="ingresar correo"
                name="email"
                required
              ></input>
              <br />

                <button className="boton-compra" onClick={enviarDatos}>
                  COMPRAR
                </button>{" "}
              
            </div>
          </div>
        ) : (
          <div className="carrito-vacio">
            <label>El carrito está vacío.</label>
            <br />
            <label>Agrega productos para continuar.</label>
          </div>
        )}
      </div>
    </div>
  );
};
