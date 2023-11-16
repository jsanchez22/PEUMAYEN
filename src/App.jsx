import React from "react";
import { ItemList } from "./components/ItemList";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import {Contact} from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCart } from "./components/ShoppingCart";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import { Quienes_Somos } from "./components/Quienes_Somos";
import {Compra} from "./components/Compra";

export const App = () => {
  return (
    <ShoppingCartProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quienes-somos" element={<Quienes_Somos />} />
          <Route path="/compra" element={<Compra/>} />
        </Routes>
        <Footer/>
      </Router>
    </ShoppingCartProvider>
  );
};
