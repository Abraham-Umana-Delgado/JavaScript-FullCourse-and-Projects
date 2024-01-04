// 📌 EVENTOS - focus | blur.
//Focus funciona para determinar cuando un usuario esta sobre un INPUT y va a emitir una entrada.
//Blur funciona cuando el usuario se sale de la entrada y le da clic a cualquier otra parte.

//📌EVENTO - submit - Se usa para enviar la data del form al servidor.

//📌EVENTO - change - Se usa para los SELECT dentro de los formularios, para cambiar entre opciones.

const formulario = document.querySelector('#formulario-donacion');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Formulario enviado exitosamente');
});

formulario['pais'].addEventListener('change', (event) => {
    console.log('Haz seleccionado el pais: ' + formulario['pais'].value);
    console.log(event.target.value);
});

formulario['cantidad-5'].addEventListener('change', (event) => {
    console.log('Haz seleccionado donar la cantidad de: ' + formulario['donacion'].value + ' USD');
});

formulario['correo'].addEventListener('focus', (event) => {
console.log('El INPUT del email ahora es el foco de atencion');
});

formulario['correo'].addEventListener('blur', (event) => {
    console.log('El INPUT del email ahora YA NO ES foco de atencion');
});

//EJECUTA UN EVENTO CUANDO PRESIONAMOS UNA TECLA DENTRO DE UN INPUT
formulario['correo'].addEventListener('keydown', (event) => {
    console.log(event);
});

//EJECUTA UN EVENTO CUANDO DEJAMOS DE PRESIONAR UNA TECLA DENTRO DE UN INPUT
formulario['correo'].addEventListener('keyup', (event) => {
    console.log(event);
});