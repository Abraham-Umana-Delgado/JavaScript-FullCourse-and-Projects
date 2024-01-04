const form = document.getElementById('formulario-donacion');
const email = form.querySelector('#correo');
const btnSubmit = document.getElementById('btnEnviar');
const selectedCountry = form.querySelector('#pais');

btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Formulario enviado');
    console.log(correo.value);
    console.log(selectedCountry.value);
    console.log(form['donacion'].value);
    console.log(form['fecha'].value); //Accediendo por medio del NAME del input.
    console.log(form.fecha.value); //Accediendo por del ID del input
});