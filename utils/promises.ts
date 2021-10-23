
// Mocks Data
const employees: any[] = [
    {
        numEmpleado: 100,
        nombre: 'Victor Hugo',
        apellidos: 'Lara Lira'
    },
    {
        numEmpleado: 101,
        nombre: 'Francisco Javier',
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
        gratificacion: 450,
        horasExtras: 9000,
        bono: 350
    }
];

export default () => {
    return {
        // Definicion de la funcion getUsuarioByEmpleadoNumber
        getUsuarioByEmpleadoNumber: (numEmpleado: number, timeout: number) => {
            return new Promise((resolve: any, reject: any) => {
                const employee: any = employees.find((empleado: any) => empleado.numEmpleado == numEmpleado);
                if (employee) {
                    resolve({ status: 'OK', data: employee, entidad: 'Empleado' });
                } else {
                    reject({ status: 'NOT FOUND', data: 'Empleado no encontrado. Favor de verificar !!!', entidad: 'Empleado'});
                }
            });
        },
        // Definicion de la funcion getUsuarioByEmpleadoNumber
        getSalariosByEmpleadoNumber: (numEmpleado: number, timeout: number) => {
            return new Promise((resolve: any, reject: any) => {
                const salario: any = salarios.find((salario: any) => salario.numEmpleado == numEmpleado);
                if (salario) {
                    resolve({ status: 'OK', data: salario, entidad: 'Salario' });
                } else {
                    reject({ status: 'NOT FOUND', data: 'Salario no encontrado. Favor de verificar !!!', entidad: 'Salario'});
                }
            });
        },
        // Crear la funcion getPercepcionesAdicionalesBySalario  
        getPercepcionesAdicionalesBySalario: (salario: number, timeout: number) => {
            return new Promise((resolve: any, reject: any) => {
                const percepciones: any = percepcionesAdicionales.find((item:any) => item.salario == salario)
                if (percepciones) {
                    resolve({status: 'OK', data: percepciones, entidad: 'Percepciones' });
                } else {
                    reject({status: 'NOT FOUND', data: `Lo sentimos, no se encontraron percepciones adicionales para el salario ${salario}`, entidad: 'Percepciones'});
                }
            });
        }
    }
};