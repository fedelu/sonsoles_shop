import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
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
                    <NavBtnLink to="/carrito"><FontAwesomeIcon icon={faShoppingCart} />
                    </NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;

