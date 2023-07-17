/*import { nombre, obtenerPosts } from "./namedExports";

console.log('Mi nombre es: ' + nombre);
console.log(obtenerPosts());*/

// 📌 Tu tambien puedes importar variables con ALIAS, de la siguiente manera.

// 📌 MEJOR CONOCIDOS COMO NAMED IMPORTS

/*import { nombre as nombrePost, obtenerPosts } from "./namedExports";

const nombre = 'Abraham';
console.log(nombre);

console.log('Mi nombre es: ' + nombrePost);
console.log(obtenerPosts());*/

// 📌 NAMEDSPACE IMPORTS - IMPORTA VARIABLES Y FUNCIONES EXPORTADAS, TODOS DE UN SOLO y SIEMPRE DEBEN LLEVAR UN ALIAS.

/*import * as datos from './namedExports';

console.log(datos);
console.log(datos.nombre);
console.log(datos.obtenerPosts());*/

//Lo que hace es mandar un OBJECT llamado como le pusiste en el alias con toda la informacion que se exporta


//📌 DEFAULT IMPORTS.

import obtenerUsuario from './defaultExports';

console.log(obtenerUsuario());