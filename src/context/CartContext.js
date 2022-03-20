import { createContext, useState } from "react";

export const CartContext = createContext ([]);


const CartContextProvider = ({children}) => {
const [carrito, setCarrito] = useState ([]);
const addToCart = (cantidad, producto) => {
    if (estaEnElCarrito(producto.id)) {
        alert('Ya esta en el carrito!');
    } else {
    setCarrito ([ ...carrito, {...producto, cantidad}])
    }
};

const estaEnElCarrito = (id) => {
    const respuesta = carrito.some((producto)=> producto.id === id);
    return respuesta;
};

const borrarUnProducto = (id) =>{
    setCarrito(carrito.filter(producto => producto.id != id))
}

const vaciarCarrito = () => {
    setCarrito([]);
};

const getTotalCarrito = () =>{
    let cantidadCarrito = 0;
    for(let i = 0; i < carrito.length; i++){
        cantidadCarrito += carrito[i].cantidad
    };
    return cantidadCarrito;
}

const getPrecioTotalCarrito = () =>{
    let precioTotal = 0;
    for(let i = 0; i < carrito.length; i++){
        precioTotal += (carrito[i].precio * carrito[i].cantidad)
    }
    return precioTotal;
}

console.log(carrito)
    return(
        <CartContext.Provider value={{ carrito, addToCart, vaciarCarrito, borrarUnProducto, getTotalCarrito, getPrecioTotalCarrito}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider