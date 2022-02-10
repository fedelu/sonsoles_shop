export default function Item({ producto }){
    return (
        <div>
            <p className="nombre">{producto.nombre}</p>
            <p className="desripcion">{producto.descripcion}</p>
            <p className="precio">{producto.precio}</p>
            <img src={producto.imagen} alt="Imagen del prod"/>
        </div>
    )
}