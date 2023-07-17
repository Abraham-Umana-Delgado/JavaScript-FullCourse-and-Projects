/*
La propagacion de eventos nos dice que si nosotros le proporcionamos eventos al contenedor 
padre de un documento HTML, automaticamente se los estamos poniendo a los hijos tambien

Sin embargo la propagacion se puede controlar si desde el evento especifico del elemento hijo se quita
*/

const contenedor = document.getElementById('contenedor1');

contenedor.addEventListener('click', (event) => {
    console.log('Le estas dando clic dentro del contenedor');
});


const firstBox = document.querySelector('.caja');

firstBox.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('Le estas dando clic dentro de la primera caja');
});
