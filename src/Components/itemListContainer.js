import React, { useEffect, useState } from "react";
import './greeting.css'
import ItemCount from "./ItemCount";
import { getProductos } from "../api/api";
import ItemList from "./ItemList";
import './ItemList.css'



function ItemListContainer({greeting}) {
    const [productos, setProductos] = useState ([]);

useEffect(() => {
getProductos().then(function(productos){
    console.log (productos);

    setProductos(productos);
})
},[]);
    function AgregarItem (contador) {
        console.log (contador)
    }
    return (
           <div>
               <h1 className="greeting1"> {greeting}</h1>
               {productos.length > 0 ? <ItemList productos={productos}/> : <p>Cargando Productos </p>}
               <ItemCount stock={4} initial={1} onAdd={AgregarItem}/> 
           </div>
        
    )
};

export default ItemListContainer; 