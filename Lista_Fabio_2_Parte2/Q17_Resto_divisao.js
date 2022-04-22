import { input,print } from "../io_utils.js";

function main(){
    const valor1 = Number(input("Digite um valor inteiro: "))
    const valor2 = Number(input("Digite um valor inteiro: "))

    const resultado = operacao(valor1,valor2)

    print(`Reultado:${resultado}`)
}
function operacao(v1,v2){
    let operacoes_importantes
    if(v1 % v2 === 1){
        operacoes_importantes = ((v1 + v2)+1)
    }
    else if(v1 % v2 === 2){
        if(v1%2 === 2 && v2%2 === 2){
            operacoes_importantes = "Sao pares"
        }
        else{
            operacoes_importantes = "Sao impares"
        }
    }
    else if(v1 % v2 === 3){
        operacoes_importantes = ((v1 + v2)* v1)
    }
    else if(v1 % v2 === 4){
        operacoes_importantes = ((v1 + v2)/v2)
    }
    else{
        operacoes_importantes = (v1**2),(v2**2)
    }
    return operacoes_importantes
}
main()