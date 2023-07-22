import dataFotos from '../datos/fotos';
const contenedorCategorias = document.getElementById('categorias');
const galeria = document.getElementById('galeria');

//EVENTO DISPARADO PARA ABRIR LA GALERIA CUANDO LE DOY CLICK A UNA CATEGORIA.

contenedorCategorias.addEventListener('click', (event) => {
    event.preventDefault(); //Evita comportamientos por defecto del navagador como enviar un usuario al inicio cuando este le da click a un apartado que tiene un evento con un href + # (Almoadilla).

    // Esta linea la hago porque yo quiero que unicamente se abra la galeria cuando yo presiono una categoria que tiene un enlace, caso contrario no quiero eso, quiero que devuelva NULL.
    if (event.target.closest('a')) {
        galeria.classList.add('galeria--active');
        document.body.style.overflow = 'hidden';

        const categoriaActiva = event.target.closest('a').dataset.categoria;
        const fotos = dataFotos.fotos[categoriaActiva];


        const carrusel = galeria.querySelector('.galeria__carousel-slides');

        carrusel.innerHTML = ''; // Esta linea de codigo lo que hace es que si cierro una categoria, las fotos del carrusel de esa categoria se eliminan y si abro otra, no se muestran junto a las de la otra categoria.

        //Foreach que sirve para cargar las fotos de cada categoria al usuario que le da click a la categoria
        fotos.forEach((foto) => {
            const slide = `
            <a href="#" class="galeria__carousel-slide">
            <img class="galeria__carousel-image" src="${foto.ruta}" alt="" />
        </a>
    `;
            galeria.querySelector('.galeria__carousel-slides').innerHTML += slide;
        });
        galeria.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');
    }
});
