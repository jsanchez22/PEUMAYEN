import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

export const Item = ({ pk_articulos, titulo, description, Precio , cantpk_articulosad ,img }) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.pk_articulos === pk_articulos);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.pk_articulos === pk_articulos) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { pk_articulos, titulo, quantity: 1, Precio }];
      }
    });
  };

  const removeItem = (pk_articulos) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.pk_articulos === pk_articulos)?.quantity === 1) {
        return currItems.filter((item) => item.pk_articulos !== pk_articulos); 
      } else {
        return currItems.map((item) => {
          if (item.pk_articulos === pk_articulos) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityBypk_articulos = (pk_articulos) => {
    return cart.find((item) => item.pk_articulos === pk_articulos)?.quantity || 0;
  };

  const quantityPerItem = getQuantityBypk_articulos(pk_articulos);

  return (
    <div className="item-box">
      
      <div>{titulo}</div>
      <img src={img} width="80" height="55" />
      <div className="item-price">${Precio}</div>

      {quantityPerItem === 0 ? (
        <button className="item-add-button" onClick={() => addToCart()}>
          + Agregar al carrito
        </button>
      ) : (
        <button className="item-plus-button" onClick={() => addToCart()}>
          + Agregar mas
        </button>
      )}

      {quantityPerItem > 0 && (
        <button className="item-minus-button" onClick={() => removeItem(pk_articulos)}>
          -Quitar item
        </button>
      )}

      {quantityPerItem > 0 && (
        <div className="item-quantity">{quantityPerItem} u.</div>
      )}

    </div>
  );
};
