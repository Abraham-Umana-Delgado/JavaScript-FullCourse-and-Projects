// 📌 FUNCIONES DE TIEMPO, PARA INDICAR CUANDO SE DEBE REALIZAR UNA ACCION.

/*

#1 - 📌 window.setTimeOut()
Nos permite ejecutar una funcion despues de cierto tiempo. Sin embargo solo EJECUTA la funcion 1 VEZ Y YA
Puedo ejecutar un callback(), pero tambien cualquier funcion que yo tenga definida anteriormente del TIMEOUT
*/


/*const saludar = () => {
    console.log('Hola Espenser');
}

let id;
const iniciar = () => {
    console.log('Iniciando timer...');
    id = setTimeout(saludar, 5000); // Cuando llamas a una funcion debes llamarla sin los () en el TIMEOUT
    //TIMEOUT tiene una peculiaridad, cuando el timer inicia, este retorna un ID, ID que podemos usar luego para detener el timer manualmente
}


const detener = () => {
    console.log('Deteniendo timer...');
    clearTimeout(id);
}*/




/*#2 - 📌 window.setInterval()
Nos permite ejecutar una funcion despues de cierto tiempo. Esta ejecuta la funcion ciclicamente NO PARA.
Puedo ejecutar un callback(), pero tambien cualquier funcion que yo tenga definida anteriormente del TIMEOUT
*/


/*const saludar = () => {
    console.log('Hola Abraham');
}

const saludarAbraham = () => {
console.log('Iniciando el timer...');
setInterval(saludar, 2000);
}*/

let cuenta = 0, resultado;

const contar = () => {
    resultado = setInterval(() => {
        console.log(cuenta);
        cuenta++;
    }, 1000)
}

const pararDeContar = () => {
console.log('Parando de contar en este momento....')
clearInterval(resultado);
console.log('Contador detenido exitosamente...')
}

