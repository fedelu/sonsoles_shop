import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {

    const {carrito, getTotalCarrito} = useContext(CartContext);
    
    return (

            <div className="cartWidget">
                { carrito.length > 0 &&

                    <Link to='/carrito'>
                        <span className="material-icons-outlined icon-cart">Carrito</span>
                        <span>{getTotalCarrito()}</span>
                    </Link>
                
                }
            </div>

    )
};