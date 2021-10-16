"use strict";
console.log('Hellow NodeJS MTWyDM');
let frutas = ['Fresa', 'Melon', 'Sandia', 'Platano'];
let edades = [23, 45, 26, 32, 50];
let matriz = [true, false, true, false, false];
let persona1 = {
    nombre: 'Jose Luis',
    apellidos: 'Rosas Peimbert',
    edad: 30,
    fechaNacimiento: new Date(1976, 8 - 1, 7)
};
let persona2 = {
    nombre: 'Oscar',
    apellidos: 'Franco',
    edad: 35,
    fechaNacimiento: new Date(1984, 5 - 1, 20)
};
// Arreglo de Personas
let personas = [];
// Agrego un elemento al arreglo de personas
personas.push(persona1);
personas.push(persona2);
// Imprimir Arreglo de Personas
console.log('El contenido del arreglo es: ', personas);
let centinela = false;
let nombre = 'Jose Luis';
const IVA = 1.16;
let ladoA = 5;
let ladoB = 5;
let area = ladoA * ladoB;
console.log('El area es: ', area);
ladoA = 10;
ladoB = 15;
area = ladoA * ladoB;
console.log('El area es: ', area);
let precio = 100;
let precioTotal = precio * IVA;
console.log('El precio total es: ', precioTotal);
// Definimos una Funcion en TypeScript
const calculaArea = (ladoA, ladoB) => {
    return ladoA * ladoB;
};
function calculaArea2(ladoA, ladoB) {
    return ladoA * ladoB;
}
console.log(calculaArea2(6, 8));
