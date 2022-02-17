import React, { useEffect, useState } from "react";
import './greeting.css'
import ItemCount from "./ItemCount";
import { getProductos } from "../api/api";
import ItemList from "./ItemList";
import './ItemList.css'
import { useParams } from "react-router-dom";



function ItemListContainer({greeting}) {
    const [productos, setProductos] = useState ([]);
    const {categoriaNombre} = useParams ();


useEffect(() => {
getProductos().then((productos) =>{
    if (!categoriaNombre){
        setProductos(productos);
    } else {
        const productosPorCategoria = productos.filter((producto) => {
         return producto.categoria === categoriaNombre;
    });    

    setProductos(productosPorCategoria);
    }

    }).catch((error)=> {
        console.log(error);
    });
    },[categoriaNombre]);
    function AgregarItem (contador) {
        console.log (contador)
    }
    return (
           <div>
               <h1 className="greeting1"> {greeting}</h1>
               {productos.length > 0 ? <ItemList productos={productos}/> : <p>Cargando Productos </p>}
           </div>
        
    )
};

export default ItemListContainer; 