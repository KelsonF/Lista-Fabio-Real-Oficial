import { input,print } from "../io_utils.js";

function main(){
    const peso = Number(input('Digite o valor do seu peso: '))
    const altura = Number(input('Digite o valor de sua altura: '))

    const imc_usuario = calcular_Imc(peso,altura)

    console.log(imc_usuario)
}
function calcular_Imc(p,a){
    return (p/a**2)
}
main()