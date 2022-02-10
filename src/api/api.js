function Prenda(id,nombre,precio,talle,stock,descripcion,color,imagen) {

    this. id = id;
    this. nombre = nombre;
    this. precio = precio;
    this. talle = talle;
    this. stock = stock;
    this. descripcion = descripcion;
    this. color = color;
    this. imagen = imagen ;
 }

 const productos = [ 
    new Prenda (1,"Bota Cardal",2000,"35",10,"100% Cuero","Marron",'https://via.placeholder.com/200'),
    new Prenda (2,"Bota tejana",2000,"38",2,"100% Cuero","Negro",'https://via.placeholder.com/200')
]

const promesa =new Promise (function (resolve, reject) {
setTimeout (function () {
    resolve (productos);
},2000)
});

function getProductos(){
    return promesa;
}

export {
    getProductos,
}