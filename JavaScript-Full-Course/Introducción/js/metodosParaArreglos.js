const colores = ['rojo', 'verde', 'azul', 'Amarillo', 'Morado', 'Marron', 'Negro', 'Blanco','Beige'];

//Los arrays dentro de JS realmente son objetos, las propiedades son informacion que hay dentro del objeto y las funciones di pues metodos.

//⚪️ El metodo .push agrega un nuevo elemento al final del arreglo

// ⚪️ El metodo .length sirve para ver la longitud del arreglo.

// ⚪️ El metodo .toString() sirve para convertir los elementos del array en una cadena de texto.

// 📌 Accedo al cuerpo de la pagina y luego al HTML y le digo que reemplace el contenido por lo que tiene el arreglo en forma de cadena de texto

document.body.innerHTML = colores.toString();

console.log(colores);


// ⚪️ El metodo .join() sirve para convertir los elementos del array en una cadena de texto y separar cada elemento.
console.log(colores.join(','));

//Conviertes los elementos del array en texto normal y lo puedes separar con algun signo ya sea una (,) un ( ), (.) etc...


// ⚪️ El metodo .sort() sirve para ordenar un array de cadenas de texto de manera alfabetica y tambien ordena numeros, arreglos de numeros...

console.log(colores.sort());

const frutas = ['Pera', 'Manzana', 'Sandia', 'Naranja', 'Banano', 'Aguacate'];

console.log(frutas.sort());
console.log(frutas.reverse());

const verduras = ['Tomate', 'Cebolla', 'Apio', 'Culantro', 'Ayote'];


// ⚪️ El metodo .reverse() ordena los elementos de un arreglo de forma descendente.

const numerico = [100, 50, 1, 2, 28, 66, 89];

console.log(numerico.reverse());

// ⚪️ El metodo .concat() junta 2 arrays en 1 solo

console.log(colores.concat(frutas));

const verduleria = frutas.concat(verduras);

console.log(verduleria);

// ⚪️ El metodo .pop() remueve el ultimo elemento de un arreglo.

const persona = ['Abraham', 'Umaña', 'Costa Rica', 22];

persona.pop();
console.log(persona);


// ⚪️ El metodo .shift() remueve el primer elemento de un arreglo.

const diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves','Viernes', 'Sabado', 'Domingo'];

diasSemana.shift();
console.log(diasSemana[2]);

// ⚪️ El metodo .unshift('ELEMENTO NUEVO') agrega un elemento al incio del array

diasSemana.unshift('Lunes');
console.log(diasSemana);



// ⚪️ El metodo .splice(Posicion, Elementos que vas a eliminar, los nuevos elementos a insertar) agrega un elemento al incio del array

/*

Nos permite reemplazar los elementos que ya estan en un array por otros elementos o agregar elementos desde una posicion determinada

📌 PARAMETROS QUE RECIBE SPLICE 📌

#1. Posicion desde la que voy a comenzar a reemplar los elementos

#2. Elementos que voy a remover por los nuevos.

#3. Los nuevos elementos a agregar
*/

numerico.splice(2, 2, 52, 64);

console.log(numerico);

// Tu decides si reemplazar los elementos o mas decirle que los mantenga pero que a partir de esa posicion agregue los demas

numerico.splice(2,0, 104, 108);
console.log(numerico);

// ⚪️ El metodo .slice() agrega los elementos seleccionados de un arreglo para pasarlos a otro arreglo o sacarlos del arreglo donde estaban

/*

📌 PARAMETROS QUE RECIBE SPLICE 📌

#1. Posicion desde la que vas a copiar los elementos 

#2. Posicion que marque el antes hasta la que quieres copiar

Ejemplo si yo quiero copiar del 1 al 5, entonces los parametros serian

1 - Posicion inicial.

6 - posicion que marca el antes de donde se quiere copiar, asi el sistema agarra del 1 al 5.

*/

const frutillas = ['Uva', 'Cereza', 'Mora', 'Frambueza', 'Tomate cherry'];

const frutillasFavoritas = frutillas.slice(1,4);

console.log(frutillasFavoritas);


