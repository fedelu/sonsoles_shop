import { useEffect , useState} from 'react';
import { useParams } from 'react-router-dom';
import {getProductos} from '../api/api';
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer () {
    const [producto, setProducto] = useState ([]);
    const {itemId} = useParams();
    useEffect (() => {
        getProductos().then((items)=> {
            const item = items.find((i) => i.id === Number(itemId));
            setProducto(item)
            console.log (itemId);
        });
    }, [itemId]);
    return (
        <div>
            {!producto ? <p> Cargando producto....</p> : <ItemDetail producto={producto}/>}
        </div>
    )
};
