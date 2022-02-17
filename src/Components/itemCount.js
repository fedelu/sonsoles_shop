import React, { useState } from "react";


function ItemCount ({stock , initial, onAdd}) {
    const [contador, cambioContador] = useState (initial);

    function Sumar () {
        if (contador < stock) {
        cambioContador (contador + 1) }
        else {
        cambioContador (contador + 0) }    
        }

    function Restar () {
        if (contador >0) {
            cambioContador (contador - 1) }
            else {
            cambioContador (contador - 0) }
    }

    return <div>
        <button onClick={Sumar}>+</button>
        <h3>{contador}</h3>
        <button onClick={Restar}>-</button>
        <button onClick={() => onAdd (contador)}>Agregar al Carrito</button>
    </div>;
}

export default ItemCount ;