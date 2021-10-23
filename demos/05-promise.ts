import RH from './utils/promises';

// Encadenamiento de Promesas
RH().getUsuarioByEmpleadoNumber(102, 3000)
    .then((result: any) => {
        console.log(result);
        return RH().getSalariosByEmpleadoNumber(result.data.numEmpleado, 3000)
    })
    .then((salario: any) => {
        console.log(salario);
        // TO DO: Mandar llamar la funcion getPercepcionesAdicionalesBySalario y encadenar su resultado 
        // en el siguiente "then"
         return RH().getPercepcionesAdicionalesBySalario(salario.data.salario, 3000)
    })
    .then((result: any) => {
        console.log(`Las percepciones adicionales para el salario ${result.data.salario} son: `, result.data.gratificacion, result.data.horasExtras, result.data.bono)
    })
    .catch((error: any) => console.log(error));