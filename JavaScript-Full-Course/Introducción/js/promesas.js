/*
Es una estructura que lo que hace es darle instrucciones al programa para que le haga una promesa al 
navegador de que una vez ejecutemos la operacion en el programa este le va a responder al navegador
con la informacion que el usuario esta solicitando...
*/

//Creamos la promesa y la definimos..
const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        const exito = true;
        if (exito) {
            resolve("El proceso tuvo exito");
        } else {
            reject("La operacion fallo");
        }
    }, 4000);

});

/*
Resolve y reject son funciones que ejecuta la promesa las cuales nos brindan un resultado determinado.
*/

//Ejecutar la promesa, hacer que el navegador se quede esperando la respuesta.

//Si la operacion fue exitosa quiero que ejecutes esta funcion.
promesa.then((mensaje) => {
    alert(mensaje);
});

//Ejecuta el mensaje del resolve();

promesa.catch((mensaje) => {
    alert(mensaje);
});

//Ejecuta el mensaje del reject();