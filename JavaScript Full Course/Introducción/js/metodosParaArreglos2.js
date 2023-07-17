/*
#1 📌 .indexOf()
Obtenemos el primer index de un elemento y sino hay nos retorna un -1

El index en un array es la posicion de un determinado elemento.

Eso si INDEXOF devuelve el primer index de la primera coincidencia en el array

Si quiero devolver la posicion del nombre ABRAHAM 2 veces, este metodo solo va a devolver la primera que se encuentre de izquierda a derecha

#2 📌 .lastindexOf() - Si queremos el ultimo index de un elemento que se repite varias veces en un arrya seria con este metodo
*/

const nombres = ['Pedro', 'Gabriel', 'Jose', 'Everardo', 'Abraham', 'Jose'];

console.log('El nombre seleccionado tiene la posicion numero ' + nombres.indexOf('Abraham') + ' Dentro del array nombres');

console.log('El ultimo elemento del nombre Jose es ' + nombres.lastIndexOf('Jose') + ' Dentro del array nombres');


/*

#3 📌forEach()- Sirve para recorrer un array y por cada elemento del array ejecutar una funcion, sirve para ver cada elemento del arrray y su index
Se ve como una arrow fuction.

Puede recibir parametros

forEach(elemento del array, index del elemento)=>{
    SCOPE....
}
*/

nombres.forEach((nombre, index) => {

    console.log('Hola yo soy ' + nombre + ' Y tengo el index ' + index);

});

/*
#4 📌find()- Nos permite recorrer el array y devuelve el primer elemento que retornemos.

*/

const letra = nombres.find((nombre) => {
    if (nombre[0] === 'P') {
        return nombre;
    }
});

console.log(letra);
//Es agarrar la primera posicion, el primer nombre y convertirme ese nombre en un arreglo independiente que abarca las letras que lo componen

const frutas = ['Aguacate', 'Papaya', 'Maracuyá', 'Manzana', 'Palmito'];

// A, P, M, M - Me convierte la inicial de cada elemento del array en un nuevo array pero de cadenas.
const vistaFrutas = frutas.find((nombre) => {
    if (nombre[0] === 'P') {
        return nombre;
    }
});

console.log(vistaFrutas);

//Lo que hace el programa es recorrer el arreglo y por cada nombre que haya en el array va a probar coincidencias con la letra P y si encuentra va a devolver la primera coincidencia

