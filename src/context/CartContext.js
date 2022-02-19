import { createContext, useState } from "react";

export const CartContext = createContext ([]);


const CartContextProvider = ({children}) => {
const [carrito, setCart] = useState ([]);
const addToCart = (cantidad, producto) => {
    if (estaEnElCarrito(producto.id)) {
        alert('Ya esta en el carrito!');
    } else {
    setCart ([ ...carrito, {...producto, cantidad}])
    }
};

const estaEnElCarrito = (id) => {
    const respuesta = carrito.some((producto)=> producto.id === id);
    return respuesta;
};

const borrarUnProducto = (id) =>{
    setCart(carrito.filter(producto => producto.id != id))
}

const vaciarCarrito = () => {
    setCart([]);
};

console.log(carrito)
    return(
        <CartContext.Provider value={{ carrito, addToCart, vaciarCarrito, borrarUnProducto}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider