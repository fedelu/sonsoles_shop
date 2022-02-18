import { createContext, useState } from "react";

export const CartContext = createContext ([]);


const CartContextProvider = ({children}) => {

const [carrito, setCart] = useState ([]);
const addToCart = (cantidad, producto) => {
    setCart ([ ...carrito, {...producto, cantidad}])
};

console.log(carrito)
    return(
        <CartContext.Provider value={{ carrito, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider