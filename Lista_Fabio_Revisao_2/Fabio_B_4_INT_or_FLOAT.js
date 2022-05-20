import { input,print } from "../io_utils.js";

function main(){
    const numero = Number(input('Digite um numero: '))

    const resultado = analise(numero)
    
    if(resultado){
        print("Numero inteiro")
    }
    else[
        print("Numero float")
    ]
}
function analise(n){
    if(n % 1 === 0){
        return true
    }
    else{
        return false
    }
}
main()