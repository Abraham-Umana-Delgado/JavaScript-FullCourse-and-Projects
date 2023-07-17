/*

📌 Veremos ASYNC/AWAIT Y TRY/CATCH.

Las promesas son codigo asincrono, que lo que es un codigo que se ejecuta en segundo plano en el 
programa o navegador hasta que se cumpla el tiempo acordado para que el navegador reciba la peticion.

Entonces el programa va a esperar la respuesta del codigo asincrono, pero mientras 
pasa eso, el programa va a ejecutar cualquier otra respuesta descrita en el sistema, mientras
se ejecuta la accion que solicta el navegador.

*/
const fecthPosts = () => {
    return new Promise((resolve, reject) => {
        //Ejecute la accion que el navegador va a esperar...

        setTimeout(() => {
            const post = ['Post 1', 'Post 2', 'Post 3', 'Post 4'];
            const error = true;

            if (error) {
                reject('Hubo un error al tratar de obtener los posts');
            } else {
                resolve(post);
            }
        }, 4000);
    });
};

// Estructura de una funcion.

//Le decimos que es una funcion asincrona, que se va a ejecutar en segundo plano
const mostrarPost = async () => {
    try {
        const obtenerPost = await fecthPosts();
        console.log(obtenerPost);

        /* 
        En la variable obtener post se van a guardar los post que me envia el CALLBACK, los post son la promesa o la accion 
        que se le prometio al navegador desplegarle.
    
        cuando aplicamos async await, le decimos al navegador que solo puede ejecutar codigo solo si 
        ya recibio la promesa que el navegador esperaba, eso hace AWAIT si no ha recibido nada
        No va a continuar leyendo codigo.
        */
    } catch (error) {
        console.log(error);
    }

    //La mayoria del tiempo que se trabaje con ASYNC Y AWAIT, se trabaja con TRY/CATCH

};

mostrarPost();