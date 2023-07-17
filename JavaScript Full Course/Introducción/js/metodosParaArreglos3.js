const frutas = ['Aguacate', 'Papaya', 'Maracuyá', 'Manzana', 'Palmito', 56];

//📌 METODO .map()

/*
Ejecuta una funcion por cada elemento y permite crear un nuevo array del array original 
para cambiarle o modificarle los valores, el array nuevo que crea tiene el mismo numero de 
elementos que el array original
*/


/*const newFrutasArray = frutas.map((fruta) => {
    return fruta.toUpperCase();
});

console.log(newFrutasArray);*/


//📌 METODO .filter()

/*
Ejecuta una funcion por cada elemento y permite crear un nuevo array del array original
 para devolver los resultados que cumplan con una condicion
*/

const frutasFavoritas = frutas.filter((fruta) => {
    if (fruta.length === 8) {
        return fruta;
    }
})

console.log(frutasFavoritas);


//📌 METODO .includes()

/*
Es un metodo booleano, que permite conocer si el array contiene un elemento que yo le especifique, digamos busca coincidencias a ver sin incluye ese elemento
*/

console.log(frutas.includes('Palmito'));


//📌 METODO .every()

/*
Ejecuta un condicional por cada elemento de un arreglo y si todos los elementos cumplen con la condicion, devuelve TRUE, caso contrario FALSE
*/

const cadenaCaracter = frutas.every((cadena) => {
    if (typeof cadena === 'string') {
        return true;
    } else {
        return false;
    }
});

console.log(cadenaCaracter);

//Metodo bastante relevante para validar formularios, ver si los campos debidos cumplen con la condicion antes de ser enviados a la base de datos.

//📌 METODO .some()

/*
Ejecuta un condicional por cada elemento de un arreglo y va a devolver TRUE si alguno de los elementos del array cumple con la condicion.
*/

const cadenaCaracte = frutas.some((cadena) => {
    if (typeof cadena !== 'string') {
        return true;
    } else {
        return false;
    }
});

console.log(cadenaCaracte);