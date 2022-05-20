//se importó las librerias en fs  
const fs = require('fs');

// se define la funcion leerJSON;
function leerJSON() {
// verifica existencia del archivo;
    if (!fs.existsSync('tareas.json')) {
// en caso de que no "!" me muestra esto por pantalla; 
        console.log('no existe el archivo');
    }
//me trae la informacion del archivo en el formato utf-8 ( lenguaje que se maneja para JSON);
    const data = fs.readFileSync('tareas.json', { encoding: 'utf-8' });
    //JSON.parse => convierte a JSON en array;
    const info = JSON.parse(data)
//retorna el info;
    return info;
}

// exporta la funcion leerJSON;
module.exports = {
    leerJSON
}