

const fecthPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const postUsuario = ['Post1', 'Post2', 'Post3', 'Post4'];
            const error = false;
            if (error) {
                reject('La operacion fallo');
            } else {
                resolve(postUsuario);
            }
        });
    });
}

// Para devolver la informacion que el navegador esta esperando, hay que hacerlo de esta forma
fecthPosts().then((postUsuario) => {
    console.log(postUsuario);
}).catch((error) => {
    console.log(error);
})

//const variable = fecthPosts(); Devuelve una promesa en estado pendiente, pero no la informacion que el navegador esta esperando.