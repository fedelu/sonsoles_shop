import { useEffect , useState} from 'react';
import {getProductos} from '../api/api';
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer () {
    const [producto, setProducto] = useState ([]);
    useEffect (() => {
        getProductos().then((items)=> {
            const item = items.find((i) => i.id ===2);
            setProducto(item)
            console.log (item);
        });
    }, []);
    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}
