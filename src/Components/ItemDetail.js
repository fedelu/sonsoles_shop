import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Item({ producto }){
    const [itemCount, setItemCount] = useState (undefined);

    function AgregarItem (newItemCount) {
        setItemCount(newItemCount);
    }

    
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
                <ItemCount stock={4} initial={1} onAdd={AgregarItem}/> :
                <Link to="/cart">Ir al Carrito</Link>
            }
        </div>
    </div>
    )
}