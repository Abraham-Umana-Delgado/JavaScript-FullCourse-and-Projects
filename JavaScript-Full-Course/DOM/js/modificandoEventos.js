/*  📌 innerHTML, cambia el HTML interno */

const caja1 = document.querySelector('.caja');

console.log(caja1.innerHTML);

/* 📌 setAttribute('Atributo html', 'Valor del atributo') - Permite agregar atributos a los elementos HTML */

const atributo = document.querySelector('#contenedor1 .caja2');

atributo.setAttribute('class','caja caja2 activa');

console.log(atributo);

atributo.setAttribute('data-id', '123-874');

console.log(atributo);


/* 📌 style, nos permite modificar los estilos de un elemento en CSS */

atributo.style.background = "#d72600";
atributo.style.textTransform = "uppercase";
