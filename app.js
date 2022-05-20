// siempre el require va al principio;
//const fs = require('fs');
// imprtamos  la funcion leerJSON desde el archivo funcionesDeTareas; 

const {leerJSON} = require ('./funcionesDeTareas')
//se define accion como el valor de la posicion 2 en la terminal;
let accion = process.argv[2];

 // switch case => consecusion de if;
 // switch case compara la variable accion con cada uno de los casos;
switch (accion) {
    case 'listar':
//se llama la funcion leer JSON,no requiere argumentos y tiene el console.log incorporado;
        console.log (leerJSON());
        
        break;
// en caso de que accion sea diferente de todos los case se va por default;
    default:
// me muestra por consola este mensaje;
        console.log ( 'por favor introducir una accion');
        break;
}





