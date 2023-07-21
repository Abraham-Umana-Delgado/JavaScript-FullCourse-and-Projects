class Usuario {
    tipo = 'usuario';
    constructor(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
    }

    static borrar(id_usuario) {
        console.log(`El usuario con el id: ${id_usuario} ha sido eliminado satisfactoriamente`);
    }

    static registrados = 4000;
}


Usuario.borrar(8);
console.log(Usuario.registrados);
