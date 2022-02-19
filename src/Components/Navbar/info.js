import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
const {carrito, getTotalCarrito} = useContext(CartContext);
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Sonsoles
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/categoria/botas">
                    Botas
                </NavLink>
                <NavLink to="/categoria/sandalias">
                    Sandalias
                </NavLink>
                <NavLink to="/nosotros">
                    Nosotros
                </NavLink>
                <NavLink to="/contactanos">
                    Contactanos
                </NavLink>
                <NavBtn>
                { carrito.length >= 0 &&
                    <NavBtnLink to="/carrito"> 
                    <span><FontAwesomeIcon icon={faShoppingCart} /></span>
                    <span>{getTotalCarrito()}</span>
                   </NavBtnLink>  
                }              
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;

