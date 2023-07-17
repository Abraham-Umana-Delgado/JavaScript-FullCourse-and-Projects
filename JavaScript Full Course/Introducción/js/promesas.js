/*
Es una estructura que lo que hace es darle instrucciones al programa para que le haga una promesa al 
navegador de que una vez ejecutemos la operacion en el programa este le va a responder al navegador
con la informacion que el usuario esta solicitando...
*/

//Creamos la promesa y la definimos...
const promesa = new Promise((resolve, reject) => {

    // La accion que la operacion le promete al navegador que le va a proporcionar
    setTimeout(() => {
        const exito = false;
        if (exito) {
            resolve('La operacion tuvo exito');
        } else {
            reject('La operacion no tuvo exito');
        }
    }, 4000);
});

//Como atrapo la promesa para que tenga sentido en el navegador

//Con el metodo .THEN(), le indico al navegador que este al tanto de la informacion que le vamos a mandar y que me avise apenas la recibe
promesa.then((mensaje) => {
    alert(mensaje);
});

// ESTE METODO THEN UNICAMENTE LANZARA SI LA PROMESA TUVO EXITO O NO.

promesa.catch((mensaje) => {
    alert(mensaje);
});

// ESTE METODO THEN UNICAMENTE LANZARA SI LA PROMESA FALLO.


