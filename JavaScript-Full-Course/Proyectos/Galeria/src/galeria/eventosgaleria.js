//FUNCION CREADA PARA CERRAR LA GALERIA.

const cerrarGaleria = () => {
    galeria.classList.remove('galeria--active');
    document.body.style.overflow = '';
};

export default cerrarGaleria;