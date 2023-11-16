import React, { useContext } from "react";

export const Footer = () => {
    return (
    <nav>
      <div className="footer">
  <div className="redes-sociales">
    <a href="enlace-a-tu-facebook" target="_blank" rel="noopener noreferrer">
      <img src="./images/facebook.png" alt="Facebook" className="redes" />
    </a>
    <a href="enlace-a-tu-twitter" target="_blank" rel="noopener noreferrer">
      <img src="./images/x.png" alt="Twitter" className="redes"/>
    </a>
    <a href="enlace-a-tu-instagram" target="_blank" rel="noopener noreferrer">
      <img src="./images/instagram.png" alt="Instagram" className="redes"/>
    </a>
  </div>
  <p>© 2023 PEUMAYEN | Todos los derechos reservados</p>
</div>

    </nav>
  );
};
