import React from "react";
import './greeting.css'
import ItemCount from "./ItemCount";


function ItemListContainer({greeting}) {
    function AgregarItem (contador) {
        console.log (contador)
    }
    return (
           <div>
               <h1 className="greeting1"> {greeting}</h1>
               <ItemCount stock={4} initial={1} onAdd={AgregarItem}/> 
           </div>
        
    )
};

export default ItemListContainer; 