"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("./utils/promises"));
// Encadenamiento de Promesas
(0, promises_1.default)().getUsuarioByEmpleadoNumber(102, 3000)
    .then((result) => {
    console.log(result);
    return (0, promises_1.default)().getSalariosByEmpleadoNumber(result.data.numEmpleado, 3000);
})
    .then((salario) => {
    console.log(salario);
    // TO DO: Mandar llamar la funcion getPercepcionesAdicionalesBySalario y encadenar su resultado 
    // en el siguiente "then"
    return (0, promises_1.default)().getPercepcionesAdicionalesBySalario(salario.data.salario, 3000);
})
    .then((result) => {
    console.log(`Las percepciones adicionales para el salario ${result.data.salario} son: `, result.data.gratificacion, result.data.horasExtras, result.data.bono);
})
    .catch((error) => console.log(error));
