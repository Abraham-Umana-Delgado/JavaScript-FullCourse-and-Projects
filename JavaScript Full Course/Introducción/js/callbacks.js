/*
📌 Son funciones que se pasan como parametros a otras funciones con el objetivo de que
otras funciones puedan ejecutar a otras funciones
*/

//Definicion de la funcion
const obtenerPostUsuario = ((nombre, callback) => {
    console.log(`Obteniendo el post del usuario ${nombre} ...`);

    setTimeout(() => {
        const post = ['Post1', 'Post2', 'Post3'];
        callback(post);
    }, 4000)
});


//Aqui se la da sentido a la funcion
obtenerPostUsuario('Abraham Umana Delgado', (post) => {
    console.log(post);
});


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