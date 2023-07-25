
const carrouselDireccionImagen = (direccion) => {
    if (direccion === 'siguiente') {
        console.log('Estoy avanzando');
    } else if (direccion === 'anterior') {
        console.log('Estoy retrocediendo');
    }
}

export default carrouselDireccionImagen;