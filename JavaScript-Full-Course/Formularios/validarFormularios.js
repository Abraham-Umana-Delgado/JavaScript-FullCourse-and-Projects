const form = document.getElementById('formulario-donacion');

form.addEventListener('submit', (event) => {
    event.preventDefault();//Evita que la pagina se refresque.

    const data = {
        email: form['correo'].value,
        country: form['pais'].value,
        quantity: form['donacion'].value,
        date: form['fecha'].value,
        terms: form['terminos-y-condiciones'].checked,
    }

    if (data.email.length <= 2) {
        console.log('correo invalido');
        return;
    }
    if (data.country === '') {
        console.log('Que ha pasado con el pais playo');
        return;
    }

    if (!data.terms) {
        console.log('Y los terminos maee');
        return;
    }

    console.log(data);
});