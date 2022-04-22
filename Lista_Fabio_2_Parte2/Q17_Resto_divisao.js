import { input,print } from "../io_utils.js";

function main(){
    const valor1 = Number(input("Digite um valor inteiro: "))
    const valor2 = Number(input("Digite um valor inteiro: "))

    const resultado = operacao(valor1,valor2)

    print(`Reultado: ${resultado}`)
}
function operacao(v1,v2){
    if(v1 % v2 === 1){
        return ((v1 + v2)+1)
    }
    else if(v1 % v2 === 2){
        if(v1%2 === 0 && v2%2 === 0){
            return "Sao pares"
        }
        else{
            return"Sao impares"
        }
    }
    else if(v1 % v2 === 3){
        return ((v1 + v2)* v1)
    }
    else if(v1 % v2 === 4){
        return ((v1 + v2)/v2)
    }
    else{
        return[v1**2,v2**2]
    }
}
main()