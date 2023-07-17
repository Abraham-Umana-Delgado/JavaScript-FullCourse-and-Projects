console.log(`El ancho que tiene el screen de mi navegador es de ${window.innerWidth} px`);

console.log(`El alto que tiene el screen de mi navegador es de ${window.innerHeight} px`);

//ESTO DE ARRIBA ES EL ANCHO Y EL ALTO DE LA VENTANA DEL USUARIO, NO DE LA PANTALLA.
// LA VENTANA NO TOMA EN CUENTA LA CONSOLA, NI EL SCROLL BAR, NI LAS BARRAS DE NAVEGACION, SOLO EL VIEWPORT
// EN CAMBIO LA PANTALLA TOMA EN CUENTA TODO, LA PANTALLA ES EL MONIOR DEL USUARIO.

/*
📌 Window.open();
Nos permite abrir ventanas en el navegador...

Es posible que el navegador solicite permisos para abrir una nueva ventana...

Recibe 3 parametros...

- 1er parametro - Direccion de la nueva ventana...
- 2do parametro - Nombre de la ventana.
- 3er parametro - cadena de texto de opcuones.

Lo que hace es devolver un objeto para acceder a esa ventana.

*/
let ventana;
const abrirVentana = () => {
    ventana = window.open('', 'Ventana de Google', 'width=600px, height=600px');
    ventana.document.write('<h1>Abraham es el hombre mas guapo de la tierra</h1>');
}

const cerrarVentana = () => {
    ventana.close();
}

// 📌 Screen Object, muestra el ancho y alto del monitor del usuario, incluyendo scroll bar y barra de navegacion

console.log(`El ancho que tiene el monitor del usuario es de: ${window.screen.width}`);
console.log(`El alto que tiene el monitor del usuario es de: ${window.screen.height}`);

//Veamos el alto y ancho de la pantalla del monitor del usuario quitando la barra de navegacion...


console.log(`El ancho que tiene el monitor del usuario sin barra de navegacion es de: ${window.screen.availWidth}`);
console.log(`El alto que tiene el monitor del usuario sin barra de navegacion es de: ${window.screen.availHeight}`);



