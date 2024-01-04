const formulario = document.getElementById('formulario-donacion');
let expresionRegular;

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {
        correo: formulario['correo'].value,
        pais: formulario['pais'].value,
        donacion: formulario['donacion'].value,
        fecha: formulario['fecha'].value,
        terminos: formulario['terminos-y-condiciones'].checked,
    }
    expresionRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!expresionRegular.test(data.correo)) {
        console.log('El correo que has digitado no es valido, digita otro');
        return;
    }

    if (data.pais === '') {
        console.log('No has incluido ningun pais en tu seleccion, hazlo para que puedas enviar los datos al servidor');
        return;
    }

    if (data.donacion === '') {
        console.log('No has donado nada, selecciona la opcion de donacion que mas le parezca antes de enviar el formulario');
        return;
    }

    if (data.fecha === '') {
        console.log('Primero selecciona una fecha antes de enviar el formulario, no has seleccionado nada');
        return;
    }

    if (!data.terminos) {
        console.log('Primero checkea los terminos y condiciones');
        return;
    }

    console.log('Enviando los datos procesados en el formulario al servidor...');
    console.log(data);
});

/*

➡️ PARA VALIDAR CONTRASEÑAS, NUMERICOS, TEXTO, USUARIOS SERIA DE LA SIGUIENTE MANERA SI HUBIERA UN CAMPO EN EL FORM.

formulario.addEventListener('submit',(event)=>{
let expresionRegular;

const data = {
    password: formulario['contrasena'].value,
    phone: formulario['phone'].value,
    message: formulario['message'].value,
    user: formulario['user'].value,
}

✅ //VALIDAR LA CONTRASEÑA.

expresionRegular = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/; // Requiere al menos 8 caracteres con al menos 1 dígito, 1 minúscula, 1 mayúscula y 1 caracter especial

if(!expresionRegular.test(data.password)){
    console.log('Ingresa una contraseña correcta');
    return;
}

✅ //VALIDAR USUARIOS (ALFANUMERICOS).

expresionRegular = /^[a-zA-Z0-9_]{5,12}$/;  // Acepta de 5 a 12 caracteres alfanuméricos o guiones bajos

if(!expresionRegular.test(data.user)){
    console.log('Ingresa un nombre de usuario correcto');
    return;
}

✅ //VALIDAR CAMPOS NUMERICOS (TELEFONO).

expresionRegular = /^\d+$/;  // Acepta solo dígitos

if(!expresionRegular.test(data.phone)){
    console.log('Ingresa un numero de telefono correcto');
    return;
}

✅ //VALIDAR CAMPOS DE TEXTO (NOMBRE Y APELLIDOS).

expresionRegular = /^[a-zA-Z\s]+$/;  // Acepta solo letras y espacios

if(!expresionRegular.test(data.message)){
    console.log('Ingresa un nombre o apellido bien escrito');
    return;
}

});
*/