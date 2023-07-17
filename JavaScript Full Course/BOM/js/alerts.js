/*window.alert('Hola');

alert('Hola Abraham');*/

//📌 ALERTAS DE CONFIRMACION

const ingresarUsuario = () => {
    const accesoPermitido = confirm('El usuario es mayor de edad?');
    if (accesoPermitido) {
        alert('Hola Jeimmy bienvenida al club de las guapas');
    } else {
        alert('Acceso denegado Jeimmy, vaya para la mierda');
    }
}

// 📌 VENTANA CON INPUT, es una ventana donde el usuario introduce un valor y retorna un STRING con el valor que el usuario introdujo.

const saludar = () => {
    const saludo  = prompt('Escriba el saludo que le quieres dejar a Jeimmy Lopez');
    alert(`El saludo que le dijiste a Jeimmy es: ${saludo}`);
}

