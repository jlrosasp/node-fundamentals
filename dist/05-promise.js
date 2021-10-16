"use strict";
const employees = [
    {
        numEmpleado: 100,
        nombre: 'Hugo',
        apellidos: 'Lara Lira'
    },
    {
        numEmpleado: 101,
        nombre: 'Francisco',
        apellidos: 'Lopez Perez'
    },
    {
        numEmpleado: 102,
        nombre: 'Luis',
        apellidos: 'Cervantes Martinez'
    }
];
const salarios = [
    {
        numEmpleado: 100,
        salario: 24989
    },
    {
        numEmpleado: 102,
        salario: 42500
    }
];
const percepcionesAdicionales = [
    {
        salario: 24989,
        gratificacion: 500,
        horasExtras: 1000,
        bono: 150
    },
    {
        salario: 42500,
        gratificacion: 500,
        horasExtras: 1000,
        bono: 150
    }
];
// Definicion de la funcion getUsuarioByEmpleadoNumber
const getUsuarioByEmpleadoNumber = (numEmpleado, timeout) => {
    return new Promise((resolve, reject) => {
        const employee = employees.find((empleado) => empleado.numEmpleado == numEmpleado);
        if (employee) {
            resolve({ status: 'OK', data: employee });
        }
        else {
            reject({ status: 'NOT FOUND', data: 'Empleado no encontrado. Favor de verificar !!!' });
        }
    });
};
// Definicion de la funcion getUsuarioByEmpleadoNumber
const getSalariosByEmpleadoNumber = (numEmpleado, timeout) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find((salario) => salario.numEmpleado == numEmpleado);
        if (salario) {
            resolve({ status: 'OK', data: salario });
        }
        else {
            reject({ status: 'NOT FOUND', data: 'Salario no encontrado. Favor de verificar !!!' });
        }
    });
};
// TO DO: Crear la funcion getPercepcionesAdicionalesBySalario  
getUsuarioByEmpleadoNumber(100, 3000)
    .then((result) => {
    console.log(result);
    return getSalariosByEmpleadoNumber(result.data.numEmpleado, 3000);
})
    .then((salario) => {
    console.log(salario);
    // TO DO: Mandar llamar la funcion getPercepcionesAdicionalesBySalario y encadenar su resultado 
    // en el siguiente "then" 
})
    .catch((error) => console.log(error));
