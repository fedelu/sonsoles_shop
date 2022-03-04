import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getDoc, doc, updateDoc, deleteDoc} from 'firebase/firestore';
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import { db } from '../../firebase';

export const EditItem = () => {

    const { id } = useParams();


    const initialState = {
        nombre: "",
        categoria: "",
        color: "",
        descripcion: "",
        talle: 0,
        stock: 0,
        precio: 0
    };

    const [formValues, setFormValues] = useState(initialState);
    const [previewImagen, setPreviewImagen] = useState();
    const [formImagen, setFormImagen] = useState();
    let newImagen = null;

    useEffect(() => {
        const docRef = doc(db, "items", id);
        getDoc(docRef)
            .then(doc => {
                setFormValues({
                    nombre: doc.data().nombre,
                    categoria: doc.data().categoria,
                    color: doc.data().color,
                    descripcion: doc.data().descripcion,
                    talle: doc.data().talle,
                    stock: doc.data().stock,
                    precio: doc.data().precio
                });
                setPreviewImagen(doc.data().imagen);
            })
            .catch(error => { console.log(error); });
    }, [id]);

    const handleInputChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        });
    };

    const handleImageChange = (event) => {
        setFormImagen(event.target.files[0]);
        const previewImagen = URL.createObjectURL(event.target.files[0]);
        setPreviewImagen(previewImagen);
    };

    const handleEditItem = async (event) => {
        event.preventDefault();

        const docRef = doc(db, "items", id);

        newImagen = null;

        if (typeof formImagen !== "undefined") {
            const storage = getStorage();
            const imageName = (+new Date()).toString(36);
            const storageRef = ref(storage, `items/${imageName}`);
            const uploadImage = await uploadBytes(storageRef, formImagen);
            newImagen = await getDownloadURL(uploadImage.ref);
        }
        const updatedItem = {
            ...formValues,
            imagen: newImagen ? newImagen : previewImagen
        };
        updateDoc(docRef, updatedItem)
            .then(doc => console.log("Se ha editado el producto correctamente."))
            .catch(error => console.log(error));
    };

    const handleDeleteItem = (e) => {
        e.preventDefault();
        const docRef = doc(db, "items", id);
        deleteDoc(docRef)
            .then(doc => console.log("Se ha eliminado el producto correctamente."))
            .catch(error => console.log(error));
    };

    return (
        <div>
            <h1>Editar un producto.</h1>
            <form onSubmit={handleEditItem}>
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
                <div>
                    <img src={newImagen ? newImagen : previewImagen}></img>
                </div>
                <button type="submit">Confirmar la edición del Item</button>
            </form>
            <button onClick={handleDeleteItem}>Eliminar Item</button>
        </div>
    );
}