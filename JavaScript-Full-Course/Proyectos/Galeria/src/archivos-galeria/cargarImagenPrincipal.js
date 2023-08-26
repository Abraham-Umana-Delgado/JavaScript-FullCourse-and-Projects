import dataFotos from '../datos/fotos';
const galeria = document.getElementById('galeria');

const cargarImagenPrincipal = (id, nombre, ruta, descripcion) => {
    galeria.querySelector('.galeria__imagen').src = ruta;
    galeria.querySelector('.galeria__imagen').dataset.idImagen = id; // Id de las imagenes del carrete
    galeria.querySelector('.galeria__titulo').innerText = nombre;
    galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;

    const categoriaActiva = galeria.dataset.categoria;
    const fotos = dataFotos.fotos[categoriaActiva];

    let indexImagenActiva;

    fotos.forEach((foto, index) => {
        if (foto.id === id) {
            indexImagenActiva = index;
        }
    });
    //El index de la imagen activa, osea la posicion en el arreglo.

    if (galeria.querySelectorAll('.galeria__carousel-slide').length > 0) {
        galeria.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active');
        galeria.querySelectorAll('.galeria__carousel-slide')[indexImagenActiva].classList.add('galeria__carousel-slide--active');
    }

}

const cargarDireccionImagen = (direccion) => {
    const categoriaActiva = galeria.dataset.categoria;
    const fotos = dataFotos.fotos[categoriaActiva];
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
            cargarImagenPrincipal(id, nombre, ruta, descripcion);
        }
    } else if (direccion === 'anterior') {
        if (fotos[indexImagenActual - 1]) {
            const { id, nombre, ruta, descripcion } = fotos[indexImagenActual - 1];
            cargarImagenPrincipal(id, nombre, ruta, descripcion);
        }
    }

}

export { cargarImagenPrincipal, cargarDireccionImagen };