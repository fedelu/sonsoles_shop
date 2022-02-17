import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Item({ producto }){
    const [itemCount, setItemCount] = useState (undefined);
    const {addToCart, cart} = useContext(CartContext)

    const onAdd = (cantidad) => {
        setItemCount(cantidad);
        addToCart(cantidad, producto)
    };

    console.log (cart);

    return (
    <div>
        <div>
            <p className="nombre">{producto.nombre}</p>
            <p className="desripcion">{producto.descripcion}</p>
            <p className="precio">{producto.precio}</p>
            <img src={producto.imagen} alt="Imagen del prod"/>
        </div>
        <div>
            {
                !itemCount ?
                <ItemCount stock={4} initial={1} onAdd={onAdd}/> :
                <Link to="/cart">Ir al Carrito</Link>
            }
        </div>
    </div>
    )
}