import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {getProductos} from '../api/api';
import ItemDetail from './ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function ItemDetailContainer () {
    const [producto, setProducto] = useState ([]);
    const {itemId} = useParams();
    useEffect (() => {

        // getProductos().then((items)=> {
        //     const item = items.find((i) => i.id === Number(itemId));
        //     setProducto(item)
        // });

        const itemRef = doc(db, "items", itemId);
        getDoc(itemRef)
        .then((snapshot)=> {
            if (snapshot.exists()) {
                setProducto ({ id: snapshot.id, ...snapshot.data()})
            }
        })
        .catch(error => {
            console.log(error)
        })
    }, [itemId]);
    return (
        <div>
            {!producto ? <p> Cargando producto....</p> : <ItemDetail producto={producto}/>}
        </div>
    )
};
