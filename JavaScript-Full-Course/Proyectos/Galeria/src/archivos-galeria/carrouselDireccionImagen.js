

const galeria = document.getElementById('galeria');

const carrouselDireccionImagen = (direccion) => {

    const slides = galeria.querySelectorAll('.galeria__carousel-slide');

    const observer = new IntersectionObserver((entradas) => {
        console.log(entradas[0]);
    });

    slides.forEach((slide) => {
        observer.observe(slide);
    });

}

export default carrouselDireccionImagen;