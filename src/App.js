import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/info";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Nosotros from "./pages/nosotros";
import Contactanos from "./pages/contactanos";
import Carrito from "./pages/carrito";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer";
import {Link} from "react-router-dom";


function App() {
  return (
    <><Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto/:itemId" element={<ItemDetailContainer/>} />
        <Route path="/categoria/:categoriaNombre" element={<ItemListContainer greeting ="Bienvenidos"/>} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="*"element={<div><h2>Página no encontrada</h2><Link to="/">{ '<< ' }Volver al incio </Link></div>}/>
      </Routes>
    </Router>
    </>

  );
}
export default App;