//📌 Las condicionales le dicen al navegador que ejecutar y que no, hacen preguntas para que el programa sepa que codigo ejecutar.

/*

⚪️ OPERADORES DE COMPARACION.

== Igual que
=== Igual en valor y en tipo de dato
!= diferente que
!== diferente en valor y en tipo de dato
> Mayor que
< Menor que
>= Igual o mayor que
<= Igual o menor que
? Operador ternario

*/

const usuario = {
    nombre: "Edgardo",
    edad: 21,
    pais: "Mexico",
    ticketConcierto: true
}

const usuario2 = {
    nombre: "Brayan",
    edad: 20,
    pais: "Costa Rica",
    ticketConcierto: true
}

if (usuario.edad > 17) {
    console.log("El usuario " + usuario.nombre + " tiene la edad requerida para ingresar al concierto");
}
else {
    console.log("El usuario " + usuario.nombre + " no posee la edad necesaria para ingresar al concierto");
}

if (usuario.edad > usuario2.edad) {
    console.log("El usuario " + usuario.nombre + " tiene una edad mayor al usuario de nombre " + usuario2.nombre + " por ende su ingreso al concierto es valido");
} 
else {
    console.log("El usuario " + usuario.nombre + " no es mayor que el usuario de nombre " + usuario2.nombre + " por ende su ingreso al concierto es invalido");
}

if (usuario2.ticketConcierto == true && usuario2.edad > 17) {
    console.log("El usuario de nombre " + usuario2.nombre + " si tiene su ticket activo para entrar al concierto y ademas tiene "+ usuario2.edad + " años");
} 
else {
    console.log("El usuario de nombre " + usuario2.nombre + " no tiene su ticket activo para entrar al concierto y ademas no tiene la mayoria de edad, ya que posee "+ usuario2.edad + " años");
}