import datos from '../datos/fotos';
import { cargarImagen } from './cargarImagen';

const slideClick = (event) => {
    let ruta, nombre, descripcion;
    const galeria = document.getElementById('galeria');
    const identificador = parseInt(event.target.dataset.id); // Normalmente es una cadena y hay que convertirla a un int para compararla y ejercer la condicion
    const categoriaActiva = galeria.dataset.categoria;

    datos.fotos[categoriaActiva].forEach(foto => {
        if(foto.id === identificador){
            ruta = foto.ruta;
            nombre = foto.nombre;
            descripcion = foto.descripcion;
        }
    });
    cargarImagen(identificador, nombre, ruta, descripcion);
}

export { slideClick };