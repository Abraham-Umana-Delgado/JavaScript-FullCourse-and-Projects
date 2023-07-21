// 📌


const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');

console.log(ultimaCaja);

ultimaCaja.style.background = "#000";
ultimaCaja.style.color = "#fff";

const allBox = document.querySelectorAll('.caja');
console.log(allBox);

let dimension = 10;

const incrementarFuente = () => {
    allBox.forEach((caja) => {
        dimension++;
        caja.style.fontSize = `${dimension}px`;
    })
}

const disminuirFuente = () => {
    allBox.forEach((caja) => {
        dimension--;
        caja.style.fontSize = `${dimension}px`;
    })
}