import datosFotos from '../datos/fotos';
const galeria = document.getElementById('galeria');


const cargarImagen = (id, nombre, ruta, descripcion) => {
    galeria.querySelector('.galeria__imagen').src = ruta;
    galeria.querySelector('.galeria__imagen').dataset.idImagen = id; // Id de las imagenes del carrete
    galeria.querySelector('.galeria__titulo').innerText = nombre;
    galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;

    const categoriaActiva = galeria.dataset.categoria;// Categoria activa
    const fotos = datosFotos.fotos[categoriaActiva]; // Las fotos de la categoria activa
    let indexImagenActual;

    fotos.forEach((foto, index) => {
        if (foto.id === id) {
            indexImagenActual = index;

        }
    });

    if (galeria.querySelectorAll('.galeria__carousel-slide').length > 0) {
        //Eliminamos el activo del slide que estaba por defecto.
        galeria.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active');

        //Marcamos el slide que seleccionamos como activo.
        galeria.querySelectorAll('.galeria__carousel-slide')[indexImagenActual].classList.add('galeria__carousel-slide--active');
    }
};

const cargarDireccionImagen = (direccion) => {

    const categoriaActiva = galeria.dataset.categoria;// Categoria activa
    const fotos = datosFotos.fotos[categoriaActiva]; // Las fotos de la categoria activa
    let indexImagenActual;
    const idImagenActual = parseInt(galeria.querySelector('.galeria__imagen').dataset.idImagen);

    fotos.forEach((foto, index) => {
        if (foto.id === idImagenActual) {
            indexImagenActual = index;
        }
    });

    if (direccion === 'siguiente') {
        if (fotos[indexImagenActual + 1]) {
            const { id, nombre, ruta, descripcion } = fotos[indexImagenActual + 1];
            cargarImagen(id, nombre, ruta, descripcion);
        } else {
            alert('No hay mas fotos para mostrar en esta galeria');
        }
    } else if (direccion === 'anterior') {
        if (fotos[indexImagenActual - 1]) {
            const { id, nombre, ruta, descripcion } = fotos[indexImagenActual - 1];
            cargarImagen(id, nombre, ruta, descripcion);
        } else {
            alert('Esta es la primera foto, si quieres ver mas avanza, ya no puedes retroceder');
        }
    }
}
/*export default cargarImagen; Cuando solo vas a importar una funcion.*/

// Cuando de un mismo archivo vas a importar mas de una funcion seria asi


export { cargarImagen, cargarDireccionImagen };