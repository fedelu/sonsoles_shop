import {getDocs, collection, doc} from "firebase/firestore";
import {db} from "../firebase"

// function Prenda(id,nombre,categoria,precio,talle,stock,descripcion,color,imagen) {

//     this. id = id;
//     this. nombre = nombre;
//     this. categoria = categoria;
//     this. precio = precio;
//     this. talle = talle;
//     this. stock = stock;
//     this. descripcion = descripcion;
//     this. color = color;
//     this. imagen = imagen ;
//  }

//  const productos = [ 
//     new Prenda (1,"Bota Cardal",'botas',2000,"35",10,"100% Cuero","Marron",'https://via.placeholder.com/200'),
//     new Prenda (2,"Sandalia Malva",'sandalias',1500,"38",2,"Sandalia muy comoda","Negro",'https://via.placeholder.com/200')
// ]

// const promesa =new Promise (function (resolve, reject) {
// setTimeout (function () {
//     resolve (productos);
// },500)
// });

function getProductos(){
    return new Promise ((resolve, reject) => {
const itemsCollection = collection(db, "items");
getDocs(itemsCollection)
.then(snapshot => {
    const products = snapshot.docs.map( (doc) => ({ id: doc.id, ...doc.data() }))
    resolve (products)
    console.log (products)
})
.catch(error => {
    console.log(error)
})
    });
}

export {
    getProductos,
}