"use strict";
const persona = {
    id: 11452,
    nombre: 'Jose Luis',
    apellidos: 'Rosas Peimbert',
    ciudad: 'Leon',
    deportes: ['Fut', 'Beis', 'Basket'],
    organigrama: [
        {
            area: 'Development',
            puesto: 'DevOps'
        },
        {
            area: 'Networking',
            puesto: 'SRE'
        }
    ]
};
console.log(persona.id, persona.apellidos, persona.deportes, persona.organigrama[0]);
// Desestructuracion de un Objeto
const { id, apellidos, deportes, organigrama } = persona;
console.log(id, apellidos, deportes, organigrama);
const frutas2 = ['Manzana', 'Pera', 'Naranja', 'Mandarina', 'Platano', 'Fresa'];
// const f1: string = frutas2[0];
// const f2: string = frutas2[1];
// const f3: string = frutas2[2];
// const f4: string = frutas2[3];
// const f5: string = frutas2[4];
// Desestructuracion de un Arreglo
const [, , , f3] = frutas2;
console.log('A ' + persona.nombre + ' le gusta desayunar todas las mañanas una ' + f3);
console.log(`A ${apellidos} 
le gusta desayunar todas 
las mañanas una ${f3}`);
