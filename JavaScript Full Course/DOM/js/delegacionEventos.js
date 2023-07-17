const contenedor = document.getElementById('contenedor1');
const agregarElemento = document.getElementById('boton1');
const eliminarElemento = document.getElementById('boton2');
const elementoEliminar = document.querySelectorAll('#contenedor1 .caja')

//ChildNodes, lo que hace es acceder a los elementos hijos del contenedor padre

// 📌📌 FORMA 1 DE AGREGAR LOS LISTENERS 📌📌

/*const agregarEvento = () => {
    contenedor.childNodes.forEach((elemento) => {
        elemento.addEventListener('click', (event) => {
            console.log(event.target);
            event.target.classList.toggle('activa');
        });
    });

}

agregarEvento();

agregarElemento.addEventListener('click', (event) => {
    const nuevoElemento = document.createElement('div');
    nuevoElemento.innerText = 'Nuevo Elemento';
    nuevoElemento.setAttribute('class', 'caja');
    contenedor.insertAdjacentElement('afterbegin', nuevoElemento);
    agregarEvento()
});*/

// 📌📌 FORMA 2 DE AGREGAR LOS LISTENERS A TODOS LOS ELEMENTOS DE UN CONTENEDOR INCLUSO AL CONTENEDOR PADRE POR MEDIO DE LA PROPAGACION DE EVENTOS 📌📌


contenedor.addEventListener('click', (e) => {
    if (e.target && e.target.tagName === 'DIV') {
        e.target.classList.toggle('activa');
    } else {
        alert(`Lo sentimos pero no podemos aplicar eventos a otros elementos que no sean DIV y elemento al que estas seleccionando es un: ${e.target.tagName}`)
    }
});


agregarElemento.addEventListener('click', (event) => {
    const nuevoElemento = document.createElement('div');
    nuevoElemento.innerText = 'Nuevo Elemento';
    nuevoElemento.setAttribute('class', 'caja');
    contenedor.insertAdjacentElement('afterbegin', nuevoElemento);
});


