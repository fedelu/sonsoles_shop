import { useEffect } from "react";
import Item from "./Item";

export default function ItemList ({productos}) {
    return (
        <div>
            {
                productos.map (function (producto) {
                    return (
                        <Item key={producto.id} item={producto}/>
                    )
                })
            }
        </div>
    );
}

