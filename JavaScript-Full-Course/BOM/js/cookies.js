// 📌 SIRVEN PARA GUARDAR INFORMACION Y QUE NO SE PIERDA CUANDO CERRAMOS LA PAGINA POR ACCIDENTE.

// Variables que se guardan en el navegador y que por mas que cerremos no se van a borrar

const crearCookie = () => {
   // document.cookie = 'nombre=Carlos';
   document.cookie = 'nombre=Carlos; expires=11 Jul 2023 01:00:00 UTC';
}


