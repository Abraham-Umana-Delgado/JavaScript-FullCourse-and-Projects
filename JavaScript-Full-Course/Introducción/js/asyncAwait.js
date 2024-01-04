const fetchPost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const postUsuario = ['Post1', 'Post2', 'Post3', 'Post4'];
            const error = false;
            if (error) {
                reject('La operacion fallo, lo sentimos');
            } else {
                resolve(postUsuario);
            }
        }, 4000);
    });
}

const userShowPost = async () => {
    try {
        const getPost = await fetchPost();
        console.log(getPost);
    } catch (error) {
        console.log(error);
    }
}

userShowPost();