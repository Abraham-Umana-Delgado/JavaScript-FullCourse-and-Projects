import cerrarGaleria from '../archivos-galeria/cerrarGaleria';
import slideClick from "../archivos-galeria/slideClick";
import { cargarDireccionImagen } from './cargarImagenPrincipal';
import carrouselDireccionImagen from './carrouselDireccionImagen';
const galeria = document.getElementById('galeria');

galeria.addEventListener('click', (event) => {

    //Busca al btn que tenga un data-accion de tipo cerrar galeria y cuando encuentre coicidencias va a llamar a la funcion de cerrar la galeria
    const boton = event.target.closest('button');
    if (boton?.dataset?.accion === 'cerrar-galeria') {
        cerrarGaleria();
    }

    //Cuando le damos click a un slide del slider
    if (event.target.dataset.id) {
        slideClick(event);
    }

    //Cuando avanzamos o retrocedemos en las flechas de la imagen principal.
    if (boton?.dataset?.accion === 'siguiente-imagen') {
        cargarDireccionImagen('siguiente');
    } else if (boton?.dataset?.accion === 'anterior-imagen') {
        cargarDireccionImagen('anterior');
    }

    //Cuando le damos click a las flechas para avanzar o retroceder en el slider.

    if (boton?.dataset?.accion === 'siguiente-slide') {
        carrouselDireccionImagen('siguiente');
    } else if (boton?.dataset?.accion === 'anterior-slide') {
        carrouselDireccionImagen('anterior');
    }
    
});