const fecthPosts = () => {
    return new Promise((resolve, reject) => {
        //Ejecute la accion que el navegador va a esperar...

        setTimeout(() => {
            const post = ['Post 1', 'Post 2', 'Post 3', 'Post 4'];
            const error = false;

            if (error) {
                reject('Hubo un error al tratar de obtener los posts');
            } else {
                resolve(post);
            }
        }, 4000);
    });
};

fecthPosts()
    .then((post) => {
        console.log(post);
    })
    .catch((error) => {
        console.log(error);
    });


