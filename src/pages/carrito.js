import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'

const Carrito = () => {
    const {carrito, vaciarCarrito, borrarUnProducto} = useContext(CartContext)

    return (
    <div>
        {carrito.length === 0 ? (
             <div>
             <h2>Carrtio Vacio</h2>
             <Link to="/">Home</Link>
             </div>
        ) : (
             <div>
                {carrito.map((item) => (
                    <div key={item.id}>
                    <h3>{item.nombre}</h3>
                    <button onClick={()=> borrarUnProducto(item.id)}>Eliminar producto</button>
                    </div>
                ))}
                <button onClick={vaciarCarrito}>Vaciar Carrito</button>
              </div>
        )}
      
    </div>
    );
};

export default Carrito;