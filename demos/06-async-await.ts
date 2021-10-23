import RH from './utils/promises';

// Definicion de Funcion Async/Await
async function main1() {

   
};
main1();

// Definicion de Funtion Arrow Async/Await
const main2 = async () => {

};
main2();

// Definicion de Funcion Anonima Async/Await
(async() => {
    try {
        const emp: any = await RH().getUsuarioByEmpleadoNumber(102, 3000);
        const sal: any = await RH().getSalariosByEmpleadoNumber(emp.data.numEmpleado, 3000);
        const per: any = await RH().getPercepcionesAdicionalesBySalario(sal.data.salario, 3000);    
        console.log(emp);
        console.log(sal);
        console.log(per);
    } catch (error) {
        console.log('Error: ', error)    
    }
})();
