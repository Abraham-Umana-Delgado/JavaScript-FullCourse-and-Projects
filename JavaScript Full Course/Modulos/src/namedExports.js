// 📌 FORMA 1 DE EXPORTAR ELEMENTOS.


//export const nombre = 'Carlos';

/*export const obtenerPosts = () => {
    return post = ['Post1', 'Post2', 'Post3'];
};*/

// 📌 FORMA 2 DE EXPORTAR ELEMENTOS.

const nombre = 'Carlos';

const obtenerPosts = () => {
    return ['Post1', 'Post2', 'Post3'];
};

export { nombre, obtenerPosts };

