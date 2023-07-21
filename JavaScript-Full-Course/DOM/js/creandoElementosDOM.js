const agregarCaja = () => {

    const nuevaCaja = document.createElement('div');

    nuevaCaja.innerText = 'NUEVA CAJA';
    nuevaCaja.setAttribute('class', 'caja activa');


    // 📌appendChild(elemento) Lo que hace es agregar un elemento al final de los elementos que contiene el contenedor principal.
    
    const contenedor = document.getElementById('contenedor1');
    //contenedor.appendChild(nuevaCaja);  

    /*
    
    📌 insertAdjacentElement('atributo', variable que contiene nuevo elemento)

    - Atributo 1 - afterbegin - Agrega el elemento en la primera posicion del contenedor principal
    - Atributo 2 - beforebegin - Agrega el elemento antes del elemento padre/
    - Atributo 3 - beforeend - Lo agrega al final de los elementos del padre, osea funciona igual al appendChild()
    - Atributo 4 - afterend - Lo agrega despues del contenedor padre
    
    */

    contenedor.insertAdjacentElement('afterbegin', nuevaCaja);
}