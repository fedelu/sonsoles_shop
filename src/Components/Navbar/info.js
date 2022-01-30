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

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/home">
                Sonsoles
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/home">
                    Home
                </NavLink>
                <NavLink to="/nosotros">
                    Nosotros
                </NavLink>
                <NavLink to="/contactanos">
                    Contactanos
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/carrito"><img src="https://image.shutterstock.com/image-vector/shopping-icon-vector-eps-10-260nw-577687270.jpg"></img>
                    </NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;

