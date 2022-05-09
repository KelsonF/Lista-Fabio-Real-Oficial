import { input,print } from "../io_utils.js";

function main(){
    const numero = Number(input("Digite um numero: "))

    const resultado = positivo_negativo(numero)
    if(resultado === true){
        print("Um numero positivo")
    }
    else{
        print("Um numero negativo")
    }
}
function positivo_negativo(n){
    if(n>0){
        return true
    }
    else{
        return false
    }
}
main()