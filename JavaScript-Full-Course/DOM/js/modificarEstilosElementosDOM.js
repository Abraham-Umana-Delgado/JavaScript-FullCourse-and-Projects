// 📌 Agregar clase

// 📌 Eliminar clase

// 📌 Alternar clase - toggle lo que hace es agregar la nueva clase para aplicar los nuevos estilos al elemento cuando se emite la interaccion y si ya existe entonces la borra, hace la funcion del add y remove en una misma linea de codigo

// 📌 Comprobar clase


// CLASSLIST - Lo que hace es acceder a las clases del elemento seleccionado
const clase = document.querySelector('#contenedor1 .caja');
console.log(clase);

const agregarClase = () => {
    clase.classList.add('activa');
}

const eliminarClase = () => {
    if (clase.classList.contains('activa')) {
        clase.classList.remove('activa');
    }
    else {
        alert('El elemento no contiene la clase <<Activa>>');
    }
}

const toggleClass = () =>{
    clase.classList.toggle('activa');
}

