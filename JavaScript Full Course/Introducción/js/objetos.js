// 📌 Las variables dentro de los objetos se les conocen como propiedades.

// 📌 Las funciones dentro de objetos se les conoce como metodos.

const persona = {
    nombre: "Abraham",
    apellidos: "Umaña Delgado",
    edad: 22,
    profesion: "Ingeniero en sistemas informaticos",
    negocio: {
        nicho: "Profesionales que venden servicios profesionales",
        redSocial: "Instagram",
        modelo: "Programa de acompañamiento",
        programa: {
            precio: 3500,
            metodo: "en linea"
        }
    },
    pasatiempos: ["futbol", "negocios", "conversar", "correr"],
    horaEntrenamiento: function () {
        alert("La hora de entrenamiento suya para ponerse en forma es a las" + " 4:30pm");
    }
}

//📌 Como ver el objeto en consola

console.log(persona);

console.log(persona.nombre);

console.log(persona.negocio.nicho);

console.log(persona.negocio.programa.precio);

console.log(persona.pasatiempos[3]);

//📌 Como llamar un metodo de un arreglo, ejecutar una funcion dentro de un objeto

persona.horaEntrenamiento();