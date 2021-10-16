"use strict";
// Definicion de la funcion getUsuarioByID
const getUsuarioByID = (id, timeout, callback) => {
    const user = {
        id: 11452,
        nombre: 'Jose Luis',
        apellidos: 'Rosas Peimbert',
        numEmpleado: 10899,
        area: 'TI',
        puesto: 'Dev'
    };
    setTimeout(() => {
        // Simulacion de llamda a la Base de Datos
        callback(user);
    }, timeout);
};
// Definicion de la funcion getSalarioByIDusuario
const getSalarioByIDEmpleado = (idEmpleado, timeout, callback) => {
    const salario = {
        idEmpleado: 10899,
        bruto: 12345.00,
        neto: 10123.00
    };
    setTimeout(() => {
        callback(salario);
    }, timeout);
};
// Defincion de la funcion getAguinaldoFromSalario
const getAguinaldoFromSalario = (salario, timeout, callback) => {
    const aguinaldo = {
        salario: 10123.00,
        conceptoA: 500.00,
        conceptoB: 600.00,
        conceptoC: 1500.00
    };
    setTimeout(() => {
        callback(aguinaldo);
    }, timeout);
};
// Infierno de los CallBacks | CallBacks Hell
getUsuarioByID(11452, 3000, (usuario) => {
    const { numEmpleado, nombre, apellidos } = usuario;
    console.log(numEmpleado, nombre, apellidos);
    getSalarioByIDEmpleado(numEmpleado, 5000, (salario) => {
        const { idEmpleado, neto } = salario;
        console.log(idEmpleado, neto);
        getAguinaldoFromSalario(neto, 10000, (aguinaldo) => {
            const { salario, conceptoA, conceptoB, conceptoC } = aguinaldo;
            console.log(salario, conceptoA, conceptoB, conceptoC);
        });
    });
});
console.log('Se esta ejecutando la llamada a la Base de Datos');
