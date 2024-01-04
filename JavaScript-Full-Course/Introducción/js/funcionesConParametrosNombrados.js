/*
A medida que tu aplicacion crece probablemente tus funciones tambien lo hagan, un error comun de las funciones normales en JS

Es que son dificiles de escalar, llegan a un punto donde se rompen porque ya no pueden devolver muchos valores.

Para eso llegan las funciones que tienen parametros nombrados, se usan cuando la funcion debe devolver varios valores.
*/

objectGodzilla = {
    nombre: 'Abraham',
    apellido: 'Umaña',
    password: 123,
    pais: 'Costa Rica',
    residencia: 'USA'
}

//Esto mejora la legibilidad y extensibilidad de las funciones.

function createGodzilla(objectGodzilla) {

}

//Esto es una buena practica para escalar funciones que necesiten crecer a medida de que tu aplicacion crece, mas que todo para funciones que evolucionan con el tiempo o que tienen mas de 2 parametros ya piensa en hacerla objeto.