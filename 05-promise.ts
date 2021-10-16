const employees: any[] = [
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

const salarios: any[] = [
    {
        numEmpleado: 100,
        salario: 24989
    },
    {
        numEmpleado: 102,
        salario: 42500
    }
];

const percepcionesAdicionales: any[] = [
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
const getUsuarioByEmpleadoNumber = (numEmpleado: number, timeout: number) => {
    return new Promise((resolve: any, reject: any) => {
        const employee: any = employees.find((empleado: any) => empleado.numEmpleado == numEmpleado);
        if (employee) {
            resolve({ status: 'OK', data: employee });
        } else {
            reject({ status: 'NOT FOUND', data: 'Empleado no encontrado. Favor de verificar !!!'});
        }
    });
};

// Definicion de la funcion getUsuarioByEmpleadoNumber
const getSalariosByEmpleadoNumber = (numEmpleado: number, timeout: number) => {
    return new Promise((resolve: any, reject: any) => {
        const salario: any = salarios.find((salario: any) => salario.numEmpleado == numEmpleado);
        if (salario) {
            resolve({ status: 'OK', data: salario });
        } else {
            reject({ status: 'NOT FOUND', data: 'Salario no encontrado. Favor de verificar !!!'});
        }
    });
};
// TO DO: Crear la funcion getPercepcionesAdicionalesBySalario  


getUsuarioByEmpleadoNumber(100, 3000)
    .then((result: any) => {
        console.log(result);
        return getSalariosByEmpleadoNumber(result.data.numEmpleado, 3000)
    })
    .then((salario: any) => {
        console.log(salario);
        // TO DO: Mandar llamar la funcion getPercepcionesAdicionalesBySalario y encadenar su resultado 
        // en el siguiente "then" 
    })  
    .catch((error: any) => console.log(error));