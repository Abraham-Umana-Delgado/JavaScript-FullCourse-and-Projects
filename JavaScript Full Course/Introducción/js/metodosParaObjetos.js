const user = {
    nombre: 'Abraham',
    edad: 22,
    pais: 'Costa Rica',
    amigos: ['Manuel', 'Leandro', 'Sebastian'],
    saludo: () => {
        console.log('Hola');
    }
}

user.saludo();

/*
📌 #1 - Object keys

Crea un nuevo arreglo, donde devuelve todas las propiedades del objeto
*/

const propiedades = Object.keys(user);

console.log(propiedades);

/*📌 #2 - Object values

Crea un nuevo arreglo, donde devuelve los valores del objeto
*/

const valores = Object.values(user);

console.log(valores);

/*📌 #3 - Object entries

Crea un nuevo arreglo, donde devuelve las propiedades y los valores del objeto
*/

const objeto = Object.entries(user);

console.log(objeto);
