/*
📌 Nos permiten EXPORTAR UN SOLO VALOR, YA SEA UNA VARIABLE O UNA FUNCION DE UN ARCHIVO JS.

Para mantener un codigo ordenado, aveces vamos a querer aislar funciones por cada archivo, entonces
si quieres importar solo una funcionalidad de un archivo puedes usar defaultExports.

*/

// 📌 FORMA 1.

/*export default () => {
    return {
        nombre: 'Gustavo',
        apellido: 'Lopez',
    }
}*/

// 📌 FORMA 2

const obtenerUsuario = () => {
    return {
        nombre: 'Gustavo',
        apellido: 'Lopez',
    }
}

export default obtenerUsuario;