import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/info";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Nosotros from "./pages/nosotros";
import Contactanos from "./pages/contactanos";
import Carrito from "./pages/carrito";
import Greeting from "./Components/greeting";

function App() {
  return (
    <><Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </Router>
    <itemlistcontainer Greeting ="Bienvenidos"/>
    </>

  );
}
export default App;