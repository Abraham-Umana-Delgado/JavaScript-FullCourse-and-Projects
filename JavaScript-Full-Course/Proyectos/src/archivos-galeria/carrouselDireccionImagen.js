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
                return entrada
            }
        })

        if (direccion === 'anterior') {
            const primerSlideVisible = slidesVisibles[0];
            const indexPrimerSlideVisible = entradas.indexOf(primerSlideVisible);

            if (indexPrimerSlideVisible >= 1) {
                entradas[indexPrimerSlideVisible - 1].target.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start'
                });
            } else {
                alert('Lo sentimos ya no mas imagenes disponibles para retroceder en el carrusel');
            }

        } else if (direccion === 'siguiente') {
            const ultimoSlideVisible = slidesVisibles[slidesVisibles.length - 1];
            const indexUltimoSlideVisible = entradas.indexOf(ultimoSlideVisible);

            if (entradas.length - 1 > indexUltimoSlideVisible) {
                entradas[indexUltimoSlideVisible + 1].target.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start'
                });
            } else {
                alert('Lo sentimos, ya no hay mas imagenes disponibles para avanzar en el recorrido del carrusel');
            }
        }
        slides.forEach((slide) => {
            observer.unobserve(slide);
        });
    }, options);

    slides.forEach((slide) => {
        observer.observe(slide);
    });

}

export default carrouselDireccionImagen;