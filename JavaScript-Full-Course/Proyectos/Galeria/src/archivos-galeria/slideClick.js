import { cargarImagenPrincipal } from '../archivos-galeria/cargarImagenPrincipal';
import dataFotos from '../datos/fotos';

const slideClick = (event) => {
    let nombre, ruta, descripcion;
    const galeria = document.getElementById('galeria');
    const categoriaActiva = galeria.dataset.categoria;
    const fotos = dataFotos.fotos[categoriaActiva];
    const identificador = parseInt(event.target.dataset.id);

    fotos.forEach((foto)=>{
        if(foto.id === identificador){
            ruta = foto.ruta;
            nombre = foto.nombre;
            descripcion = foto.descripcion;
        }
    });
    cargarImagenPrincipal(identificador, nombre, ruta, descripcion);
}

export default slideClick;