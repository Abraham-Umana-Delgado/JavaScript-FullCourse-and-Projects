

class Usuario {
    constructor(usuario, password) {
        this.usuario = usuario;
        this.password = password;
    }

    obtenerPost() {
        const post = ['Post1', 'Post2'];
        return post;
    }
}

class Moderador extends Usuario {
    constructor(usuario, password, permisos) {
        super(usuario, password);
        this.permisos = permisos;
    }

    borrarPost(id) {
        if (this.permisos.includes('Borrar')) {
            console.log('El post con el ID numero: ' + id + ' ha sido eliminado con éxito');
        } else {
            console.log('El usuario no tiene permisos para eliminar un post');
        }
    }

}

const usuario = new Usuario('Abraham', '123');
console.log(usuario);
console.log(usuario.obtenerPost());

const usuario2 = new Moderador('Guillermo', '456', ['Borrar', 'Modificar']);
console.log(usuario2);
console.log(usuario2.permisos);
usuario2.borrarPost(7);
