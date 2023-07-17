//📌 Forma 1 de definir una funcion - Funcion basica

/*function saludo(){
console.log("Hola Abrahm");
}

saludo();*/

//📌 Forma 2 de definir una funcion - Funcion intermedia
/*const saludo = function (){
    console.log('Hola Abraham');
};

saludo();*/

//📌 Forma 3 de definir una funcion - Funcion flecha - Arrow functions

/*const saludo = () => console.log('Hola Piwi');

saludo();*/


//Las funciones flechas tienen ciertas ventajas para ahorrar codigo mas cuando solo tienen una instruccion dentro del scope.




/* ➡️ Parametros y argumentos de una funcion */

// Los argumentos vienen los valores a los que equivalen los parametros que traen una funcion

// Son elementos que van a permitir ejecutar ciertas operaciones dentro del scope de una funcion.


const calculadora = (tipo, numero1, numero2) => {

    if (tipo === 'Suma'){
        return numero1 + numero2;
    }else{
        return numero1 - numero2;
    }
};

const miVariable = calculadora('Resta', 100, 50);
console.log(miVariable);



/* ➡️ Sentencia return, es importante para que las funciones hagan solo una cosa a la vez */

/* Como programadores debemos hacer las cosas simples para que sea mas comprensibles, las funciones
que implementemos o en general cualquier cosa debe trabajar bajo el principio responsabilidad UNICA, que 
indica que cada aspecto en el codigo se encarga de solucionar una sola cosa a la vez. */

