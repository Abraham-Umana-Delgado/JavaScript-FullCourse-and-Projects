/*Permite agregar los elementos de un array o un objeto en otro array o en otro objeto de forma expansiva
Y todos de un solo golpe, no uno por uno como agregandolos con PUSH
*/

const tronadora = ['Llama Azul', 'Peninsulas', 'Centro', 'Esperanza', 'Las Palmas', 'San Luis', 'El silencio'];

const tilaran = ['Tronadora', 'Arenal', 'Libano', 'Quebrada Grande', 'Dos', ...tronadora];

console.log(tilaran);


const adriana = {
    edad: 42,
    vivienda: 'amarilla',
    deporte: 'cindea'
}


const rosmery = {
    ...adriana,
    edad: 60,
    pais: 'Costa Rica',
    lugar: 'Tronadora',
}


console.log(rosmery);



//📌 PARAMETROS REST

/* Es lo mismo nada mas que al usar el operardor Spread en una funcion se le llaman parametros rest,

y es basicamente que una funcion va a interpretar los argumentos restantes como un arreglo y esos argunmentos se le van a pasar
como parametros rest

*/


const usuario = (nombre, correo, ...datosAdicionales) => {
    console.log(nombre, correo, datosAdicionales);
};

usuario('Abraham', 'info@abrahamumanadelgado.com', 22, 'Costa Rica');

//📌 DESTRUCTURACION DE OBJETOS.

/* Lo que hace es poder agarrar los elementos de un arreglo y asignarselos a una variable

*/


const persona = ['Abraham', 22, 'Costa Rica', 'Tronadora'];

//Arreglo de variables.
const [nombre, edad, pais, lugarResidencia] = persona;

console.log(lugarResidencia);



const lugarReside = {
    barrio1: 'Llama Azul',
    barrio2: 'El roble',
    barrio3: 'Peninsulas',
}

//Los valores de las variables del objeto deben coincidir con el nombre de las propiedades
const {barrio1, barrio2, barrio3} = lugarReside;

console.log(barrio1);