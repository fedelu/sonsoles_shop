import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { db } from '../firebase';

const Carrito = () => {
    const {carrito, setCarrito, vaciarCarrito, borrarUnProducto, getTotalCarrito, getPrecioTotalCarrito} = useContext(CartContext)

    const [formValues, setFormValues] = useState();
    const [order, setOrder] = useState();

    useEffect(()=>{
        setOrder({
            date: new Date().toDateString(),
            buyer: formValues,
            items: carrito,
            total: getPrecioTotalCarrito()
        })
    }, [formValues, carrito])

    const handleInputChange = (event) =>{
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const confirmOrder = async (e) =>{

        e.preventDefault()
        try{
            const orderCollection = await collection(db, "orders");
            const orderAdded = await addDoc(orderCollection, order);
            console.log(`Se procesó la orden correctamente con el ID: ${orderAdded.id}.`);
            alert (`Se procesó la orden correctamente con el ID: ${orderAdded.id}.`);
            const carritoIDS = order.items.map(item => item.id);
            const itemsToUpdateQuery = await query(collection(db, "items"), where(documentId(), "in", carritoIDS)); 
            const itemsToUpdateQuerySnapshot = await getDocs(itemsToUpdateQuery); 
            const batch = writeBatch(db);

            itemsToUpdateQuerySnapshot.docs.forEach((itemSnapshot, index) =>{
                batch.update(itemSnapshot.ref, {stock: itemSnapshot.data().stock - order.items[index].quantity}) 
            })

            await batch.commit(); 

            console.log("Stock actualizado correctamente.");
            
            setCarrito([]);

        }
        catch(error){
            console.log(error)
        }
    }

    return (
    <div>
        {carrito.length === 0 ? (
             <div>
             <h2>Carrtio Vacio</h2>
             <Link to="/">Home</Link>
             </div>
        ) : (
             <div>
                {carrito.map((item) => (
                    <div key={item.id}>
                    <h3>{item.nombre}</h3>
                    <p>Precio: ${item.precio}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <button onClick={()=> borrarUnProducto(item.id)}>Eliminar producto</button>
                    </div>
                ))}

               
                <div>
                     <p>Cantidad de Items({getTotalCarrito()})</p>
                     <p>Precio Total (${getPrecioTotalCarrito()})</p>    
                </div>
                <form onSubmit={confirmOrder}>
                        <div>
                            <label>Nombre Completo:</label>
                            <input type="text" name="name" onChange={handleInputChange}/>
                        </div>
                        <div>
                            <label>Teléfono:</label>
                            <input type="text" name="phone" onChange={handleInputChange}/>
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="email" name="email" onChange={handleInputChange}/>
                        </div>
                        <div>
                            <label>Verificar Email:</label>
                            <input type="email" name="email" onChange={handleInputChange}/>
                        </div>
                        <button type="submit">Confirmar Compra</button>
                    </form>
                <button onClick={vaciarCarrito}>Vaciar Carrito</button>
              </div>
              
        )}
      
    </div>
    );
};

export default Carrito;