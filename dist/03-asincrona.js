"use strict";
// Definicion de una Funcion
const asyncDemo = () => {
    setTimeout(() => {
        // Emular la llamada a una base de datos
        console.log('Se leyo la Base de Datos');
    }, 10000);
    setTimeout(function () {
        // ASYNC
        // 2do Hilo de Ejecucion al programa principal ---------------> Ejecuta un Proceso en Background: Consulta a la API
        // Al momento que termina devuelve el resultado de su ejecucion al Hilo Principal
        console.log('Se consumio la API de Pago en Linea');
    }, 3000);
    setTimeout(testing, 15000);
    console.log('Muestra Menu Lateral');
};
function testing() {
    console.log('Testing');
}
// Realizamos la llamada de la Funcion
asyncDemo();
