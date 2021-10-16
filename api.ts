console.log('Hellow NodeJS MTWyDM');


let frutas: string[] = ['Fresa', 'Melon', 'Sandia', 'Platano'];
let edades: number[] = [23, 45, 26, 32, 50]
let matriz: boolean[] = [true, false, true, false, false];

let persona1: any = {
    nombre: 'Jose Luis',
    apellidos: 'Rosas Peimbert',
    edad: 30,
    fechaNacimiento: new Date(1976, 8-1, 7)
};

let persona2: any = {
    nombre: 'Oscar',
    apellidos: 'Franco',
    edad: 35,
    fechaNacimiento: new Date(1984, 5-1, 20)
};

// Arreglo de Personas
let personas: any[] = [];
// Agrego un elemento al arreglo de personas
personas.push(persona1);
personas.push(persona2);
// Imprimir Arreglo de Personas
console.log('El contenido del arreglo es: ', personas);



let centinela: boolean = false;
let nombre:string = 'Jose Luis';

const IVA: number = 1.16;

let ladoA: number = 5;
let ladoB: number = 5;
let area: number = ladoA * ladoB;
console.log('El area es: ', area);

ladoA = 10;
ladoB = 15;
area = ladoA * ladoB;
console.log('El area es: ', area);


let precio: number = 100;

let precioTotal: number = precio * IVA;

console.log('El precio total es: ', precioTotal);

// Definimos una Funcion en TypeScript
const calculaArea = (ladoA: number, ladoB: number) => {
    return ladoA * ladoB;
}

function calculaArea2(ladoA: number, ladoB: number) {
    return ladoA * ladoB;
}

console.log(calculaArea2(6,8));





