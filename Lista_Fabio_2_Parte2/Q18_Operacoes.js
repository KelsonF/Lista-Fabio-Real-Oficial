import { input,print } from "../io_utils.js";

function main(){
    const valorA = Number(input("Digite um valor inteiro: "))
    const valorB = Number(input("Digite um valor inteiro: "))
    const operador = Number(input("Digite o operador desejado: "))

    const resultado = operacoes_importantes(valorA,valorB,operador)

    print(`Resultado:${resultado}`)
}
function operacoes_importantes(v1,v2,op){
    let calculo
    if(op === 1){
        calculo = v1 + v2
    }
    else if(op === 2){
        calculo = v1 - v2
    }
    else if(op === 3){
        calculo = v1 * v2
    }
    else if(op === 4){
        calculo = v1 / v2
    }
    return calculo
}
main()