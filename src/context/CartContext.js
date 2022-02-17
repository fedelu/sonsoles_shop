import { createContext, useState } from "react";

export const CartContext = createContext ([]);


const CartContextProvider = ({children}) => {

const [cart, setCart] = useState ([]);
const addToCart = (cantidad, producto) => {
    setCart (cantidad, producto)
}
    return(
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}




export default CartContextProvider