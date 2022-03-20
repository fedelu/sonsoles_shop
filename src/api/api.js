import {getDocs, collection, doc} from "firebase/firestore";
import {db} from "../firebase"

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