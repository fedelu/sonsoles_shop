import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {
    const {carrito} = useContext(CartContext)
    return (
        <div>
            <h1>Ver mi Carrito</h1>
        </div>
    )
}

export default Carrito;