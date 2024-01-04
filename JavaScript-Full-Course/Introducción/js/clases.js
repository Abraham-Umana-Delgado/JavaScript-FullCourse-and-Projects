/*

📌 Las clases son plantillas de codigo agrupado que se puede heredar o reusar en otro apartado de una
aplicacion web.

Variables dentro de clases se les llaman propiedades

A las funciones se les llaman metodos

Y las clases tienen un metodo CONSTRUCTOR que lo que hace es formar el objeto con el que se va a trabajar
*/

class Usuario {
    tipo = 'usuario'; // Se debe trabajar con "=" al definir propiedades las clases.
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido; //Cuando haces esto, y llamas a nombre y apellido creas una propiedad a la que le añades esos valores

        //El constructor se va a ejecutar en el momento en el que yo inicialice el objeto.
        //Lo usamos para definir las propiedades de la clase.
        // console.log('Nuevo usuario registrado');
    }

    //Tambien podemos trabajar aqui con metodos personalizados para c/u de los usuarios.

    obtenerNombreCompleto() {
        return this.nombre + this.apellido;
    }
}

const user = new Usuario('Abraham Guillermo ', 'Umaña Delgado'); // Instancia del objeto.
console.log(user.obtenerNombreCompleto());


//PUEDES CREAR LOS USUARIOS - OBJETOS QUE TU QUIERAS HACIENDO USO DE LA PLANTILLA.

const user2 = new Usuario('Adriana', ' Umaña');

console.log(user2.obtenerNombreCompleto());
