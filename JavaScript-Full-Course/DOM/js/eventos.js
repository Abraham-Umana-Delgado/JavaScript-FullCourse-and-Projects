const button = document.getElementById('boton1');
console.log(button);

const primeraCaja = document.querySelector('#contenedor1 .caja');
console.log(primeraCaja);

button.addEventListener('click', (event) => {
    primeraCaja.classList.toggle('activa');
    console.log(event);
});


const cajas = document.querySelectorAll('.caja');
const contenedor = document.querySelector('.contenedor');

cajas.forEach((caja) => {
    caja.addEventListener('click', (event) => {
        console.log(`Le has dado clic en la: ${event.target.innerHTML}`);
    });
});



