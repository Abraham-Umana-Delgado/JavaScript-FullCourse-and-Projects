const galeria = document.getElementById('galeria');

const carrouselDireccionImagen = (direccion) => {

    const slides = galeria.querySelectorAll('.galeria__carousel-slide');

    const options = {
        root: document.querySelector('.galeria__carousel'),
        rootMargin: '0px',
        threshold: 0.9,
    }

    const observer = new IntersectionObserver((entradas) => {
        const slidesVisibles = entradas.filter((entrada) => {
            if (entrada.isIntersecting === true) {
                return entrada;
            }
        });

        if (direccion === 'anterior') {
            const primerSlideVisible = slidesVisibles[0];
            const indexPrimerSlideVisible = entradas.indexOf(primerSlideVisible);

            if(indexPrimerSlideVisible >= 1){
                entradas[indexPrimerSlideVisible - 1].target.scrollIntoView({
                    behavior: 'smooth', //Comportamiento del scroll que va a tener el carrusel cuando le doy a la flecha de avanzar. SMOOTH hace que el scroll behavior sea suave
                    inline: 'start' // El ultimo elemento visible del carrusel quiero posicionarlo cuando le de avanzar como el primero
                });
            }
        } else if (direccion === 'siguiente') {
            const ultimoSlideVisible = slidesVisibles[slidesVisibles.length - 1]; // Accediendo al ultimo slide visible
            const indexUltimoSlideVisible = entradas.indexOf(ultimoSlideVisible); //Accedo a la posicion del ultimo slide visible.
            //indexOf - Accede a todos los index (Posiciones) de los slides disponibles en el carrusel y entre parentesis, puede uno filtrar el index de un slide especifico.
            if (entradas.length - 1 > indexUltimoSlideVisible) {
                entradas[indexUltimoSlideVisible + 1].target.scrollIntoView({
                    behavior: 'smooth', //Comportamiento del scroll que va a tener el carrusel cuando le doy a la flecha de avanzar. SMOOTH hace que el scroll behavior sea suave
                    inline: 'start' // El ultimo elemento visible del carrusel quiero posicionarlo cuando le de avanzar como el primero
                });
            }else{
                alert('Lo sentimos, ya no hay mas slides disponibes en el array, por ende ya no puedes avanzar mas');
            }

        }

        slides.forEach((slide) => {
            observer.unobserve(slide);
        });
    }, options);

    slides.forEach((slide) => {
        observer.observe(slide);
    });

};

export default carrouselDireccionImagen;