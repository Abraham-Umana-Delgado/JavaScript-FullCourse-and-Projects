
const cargarImagen = (id, nombre, ruta, descripcion) => {
    galeria.querySelector('.galeria__imagen').src = ruta;
    galeria.querySelector('.galeria__imagen').dataset.idImagen = id;
    galeria.querySelector('.galeria__titulo').innerText = nombre;
    galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;
}

/*export default cargarImagen; Cuando solo vas a importar una funcion.*/

// Cuando de un mismo archivo vas a importar mas de una funcion seria asi.

export { cargarImagen };