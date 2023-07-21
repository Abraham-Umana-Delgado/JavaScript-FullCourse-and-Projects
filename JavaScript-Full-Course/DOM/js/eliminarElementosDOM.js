const eliminarCaja = () => {

    const contenedor = document.getElementById('contenedor1');
    const cajaEliminar = contenedor.querySelector('.caja');

    if (cajaEliminar) {
        contenedor.removeChild(cajaEliminar);
    } else {
        alert('No hay cajas para eliminar');
    }

    /*
    - 📌 Para eliminar un elemento del DOM, uno obtiene primero el contenedor.
    - 📌 Luego obtiene el hijo de ese contenedor.
    - 📌 Y luego elimina el hijo de ese contenedor
    */
}
