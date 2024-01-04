/*
📌 Un callback es una funcion que se pasa como parametro dentro de otra funcion para que esta pueda ejecutarla.
*/

//Definiendo la funcion que va a ejecutar al callback.
const obtenerPostUsuario = ((nombre, callback) => {
    console.log(`Obteniendo los post del usuario ${nombre}...`);
    setTimeout(() => {
        const postUsuario = ['post1', 'post2', 'post3', 'post4'];
        callback(postUsuario);
    }, 4000);
});

//Ejecutar la funcion que retorna al callback

obtenerPostUsuario('Abraham Umaña Delgado', (postUsuario) => {
    console.log(postUsuario);
});

//La funcion postUsuario es el callback, que se ejecuta de forma interna cuando ejecuto a ObtenerPostUsuario de la base de datos.


//Definiendo la funcion para luego argumentarla
const obtenerFrutasFavoritas = ((nombre, callback) => {
    console.log(`Obteniendo las frutas favoritas de ${nombre} ...`);

    setTimeout(() => {
        const frutasFavoritas = ['Piña', 'Manzana', 'Maracuyá', 'Sandía'];
        callback(frutasFavoritas);
    }, 4000)
});

obtenerFrutasFavoritas('Abraham Umaña Delgado', (frutasFavoritas) => {
    console.log(frutasFavoritas);
});
