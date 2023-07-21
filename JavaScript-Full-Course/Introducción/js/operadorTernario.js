/*🟢 Funciona de la siguiente manera  

Este signo (?) le dice al sistema que si las instrucciones de la condicion se cumplen ejecute la respuesta
que esta despues de el.

Caso contrario (:) Este signo le dice que ejecute la otra

*/

const boleto = "VIP";

const codigoAcceso = (boleto === 'VIP') ? 'VIP-123-456' : 'REGULAR-456-123';

/*

Ahi estamos indicando una instruccion al programa de que si boleto es tipo VIP que ejecute el primer codigo y caso
contrario ejecute el otro, todo en una misma linea de codigo.

 */

console.log(codigoAcceso);

