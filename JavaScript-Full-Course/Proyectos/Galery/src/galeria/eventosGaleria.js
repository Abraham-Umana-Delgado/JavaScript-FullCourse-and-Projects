import cerrarGaleria from "./cerrarGaleria";
import { slideClick } from "./slideClick";
import { cargarDireccionImagen } from "./cargarImagen";
import carrouselDireccionImagen from "./carrouselDireccionImagen";

const galeria = document.getElementById('galeria');

galeria.addEventListener('click', (event) => {
    const boton = event.target.closest('button'); //Busca el boton mas cercano de abajo hacia arriba en el programa HTML.
    //Este fragmento lo que va a hacer es filtrar a todos los botones que hay en este apartaod del programa.
    if (boton?.dataset?.accion === 'cerrar-galeria') {
        cerrarGaleria();
    }

    //Este condicional comprueba primero si lo que acabo de clickear es un BOTON, si lo es ahora se va a comprobar si su DATASET es de tipo ACCION y si no, no pasa nada, y si si se va a mostrar lo que tiene el scope de la funcion.

    if (event.target.dataset.id) {
        slideClick(event);
    }

    if (boton?.dataset?.accion === 'siguiente-imagen') {
        cargarDireccionImagen('siguiente');
    } else if (boton?.dataset?.accion === 'anterior-imagen') {
        cargarDireccionImagen('anterior');
    }

    if (boton?.dataset?.accion === 'siguiente-slide') {
        carrouselDireccionImagen('siguiente');
    } else if (boton?.dataset?.accion === 'anterior-slide') {
        carrouselDireccionImagen('anterior');
    }

});



