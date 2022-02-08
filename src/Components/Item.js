export default function Item({ item }){
    return (
        <div key={item.id}>
            <p className="nombre">{item.nombre}</p>
            <p className="precio">{item.precio}</p>
            <img src={item.imagen} alt="Imagen del prod"/>
        </div>
    )
}