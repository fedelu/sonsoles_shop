import React, { useState } from 'react';
import {addDoc, collection} from 'firebase/firestore';
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import { db } from '../../firebase';

export const AddItem = () => {

    const initialState = {
        nombre: "",
        categoria: "",
        color: "",
        descripcion:"",
        talle: 0,
        stock: 0,
        precio: 0   
    }

    const [formValues, setFormValues] = useState(initialState);
    const [formImagen, setFormImagen] = useState();
    const allInputs = [formValues.nombre, formValues.categoria, formValues.color, formValues.descripcion,formValues.talle, formValues.stock, formValues.precio];

    const handleInputChange = (event) =>{
        setFormValues({
            ...formValues, 
            [event.target.name]: event.target.value
        })
    };

    const handleImageChange = (event) =>{
        setFormImagen(event.target.files[0])
    }

    const onSubmit = async (event) =>{
        event.preventDefault();
        if(!allInputs.some(input => input === "")){ 
            const itemCollection = collection(db, "items");
    
            let imagen = "https://via.placeholder.com/200";

           
            if(typeof formImagen !== "undefined"){
               const storage = getStorage();
               const imageName = (+ new Date()).toString(36);
               const storageRef= ref(storage, `items/${imageName}`); 
               const uploadImage = await uploadBytes(storageRef, formImagen); 
               imagen = await getDownloadURL(uploadImage.ref); 
            }
            
           
            const newItem = { 
                ...formValues, 
                imagen: imagen
            };
            
            addDoc(itemCollection, newItem)
                .then(doc => {console.log(`Se guardó el item correctmente con el ID: ${doc.id}.`)})
                .catch(error => {console.log(error)})

            setFormValues(initialState);
            document.querySelector("#imagenInput").value = "";

        }
        else{ 
            console.log("Complete todos los campos.")
        }
    }

    return (
        <div>
            <h1>Agregar un nuevo producto.</h1>
            <form onSubmit={onSubmit}>
            <div>
                    <label>Nombre:</label>
                    <input name="nombre" type="text" value={formValues.nombre} onChange={handleInputChange}></input>
                </div>
                <div>
                    <label>Categoria:</label>
                    <input name="categoria" type="text" value={formValues.categoria} onChange={handleInputChange}></input>
                </div>
                <div>
                    <label>Color:</label>
                    <input name="color" type="text" value={formValues.color} onChange={handleInputChange}></input>
                </div>
                <div>
                    <label>Descripcion:</label>
                    <input name="descripcion" type="text" value={formValues.descripcion} onChange={handleInputChange}></input>
                </div>
                <div>
                    <label>Talle:</label>
                    <input name="talle" type="number" value={formValues.talle} onChange={handleInputChange}></input>
                </div>
                <div>
                    <label>Stock:</label>
                    <input name="stock" type="number" value={formValues.stock} onChange={handleInputChange}></input>
                </div>
                <div>
                    <label>Precio:</label>
                    <input name="precio" type="number" value={formValues.precio} onChange={handleInputChange}></input>
                </div>
                <div>
                    <label>Imagen:</label>
                    <input id="imagenInput" type="file" onChange={handleImageChange}></input>
                </div>
                <button type="submit">Agregar producto al catálogo</button>
            </form>
        </div>
    )
}