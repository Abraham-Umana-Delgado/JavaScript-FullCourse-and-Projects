//📌 booleanos.
let mayorQue = 6 > 5;

console.log(mayorQue);

//📌 Arreglos.
let array = [1, 6, 8];
console.log(array);

let array2 = ["texto", 45, true, {propiedad:"valor"}, [7,8, "texto", true]];
console.log(array2);

//📌 Objetos.

/* A diferencia de los arreglos, donde no se puede saber puntualmente a que hace referencia cada dato que se almacena, en los objetos si se puede */

/*Un objeto es una pareja, de propiedad y valor*/
const persona = {
    nombre: "Abraham",
    apellidos: "Umaña Delgado",
    edad: 22,
    nombreDeNovia: "Jeimmy Lopez Vega",
    carro: {
        marca: "Toyota",
        modelo: "Yaris",
        anio: 2019
    }
}

console.log(persona);


//📌 Funciones.

function mostrarEdadActual(){
    let edad = 18;
    console.log(edad);
}

mostrarEdadActual();

// EMOJIS A USAR - ➡️🏆‼️🔻🔴⚪️🟠🔵✅🟢📌 ``