import dataFotos from '../datos/fotos';
import { cargarImagenPrincipal } from './cargarImagenPrincipal';
const contenedorCategorias = document.getElementById('categorias');
const galeria = document.getElementById('galeria');

contenedorCategorias.addEventListener('click', (event) => {
    event.preventDefault(); //Quito los comportamientos por defecto que tiene el navegador.

    if (event.target.closest('a')) {
        galeria.classList.add('galeria--active');
        document.body.style.overflow = 'hidden';

        const categoriaActiva = event.target.closest('a').dataset.categoria;
        galeria.dataset.categoria = categoriaActiva;

        const fotos = dataFotos.fotos[categoriaActiva];
        const carrusel = document.querySelector('.galeria__carousel-slides');
        const { id, nombre, descripcion, ruta } = fotos[0];
        cargarImagenPrincipal(id, nombre, ruta, descripcion);

        carrusel.innerHTML = '';

        fotos.forEach((foto) => {
            const slide = `
            <a href="#" class="galeria__carousel-slide">
            <img class="galeria__carousel-image" src="${foto.ruta}" data-id="${foto.id}" alt="" />
        </a>
    `;
            //Insertando al contenedor de los SLIDES, cada slide
            galeria.querySelector('.galeria__carousel-slides').innerHTML += slide;
        });
        galeria.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');
    }
});