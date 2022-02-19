import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Item({ producto }){
    const [itemCount, setItemCount] = useState (undefined);
    const {addToCart, carrito} = useContext(CartContext)

    const onAdd = (cantidad) => {
        setItemCount(cantidad);
        addToCart(cantidad, producto)
    };

    return (
    <div>
        <div>
            <p className="nombre">{producto.nombre}</p>
            <p className="desripcion">{producto.descripcion}</p>
            <span className="precio">${producto.precio}</span>
            <img src={producto.imagen} alt="Imagen del prod"/>
        </div>
        <div>
            {
                !itemCount ?
                <ItemCount stock={4} initial={1} onAdd={onAdd}/> :
                <Link to="/carrito">Terminar mi compra!</Link>
            }
        </div>
    </div>
    )
}