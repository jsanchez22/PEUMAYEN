import React from "react";
import { Item } from "./Item";
import axios from "axios";
import { useState,useEffect } from "react";


export const ItemList = () => {
  const [datos, setDatos] = useState(null);
  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const respuesta = await axios.get('https://merakicodelabs.com/Tesis/Entradas/Controllers/ArticulosController.php?consultarArticulos=true');

        setDatos(respuesta.data);
      } catch (error) {
        console.error('Error al obtener datos:', error.message);
      }
    };

    obtenerDatos();
  }, []); 


  return (<div>
    <h1 className="title-productos">PRODUCTOS</h1>
    <div className="items-list">
    
    {Array.isArray(datos) ? (
      datos.map((product, idx) => (
        <Item key={product.pk_articulos} {...product} />
      ))
    ) : (
      <p>No se pudieron cargar los datos.</p>
    )}
    
  </div>
  </div>
  );
};
