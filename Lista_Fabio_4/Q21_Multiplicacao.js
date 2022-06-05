import { input,print } from "../io_utils.js";

function main(){
    let numero1 = Number(input("Numero: "))
    let numero2 = Number(input("Numero: "))

    let multiplicacao = 0
    let maior = eh_maior(numero1, numero2)
    let menor = eh_menor(numero1,numero2)
    let contador = 0

    while(contador < maior){
        multiplicacao += menor
        contador++
    }
    print(`Resultado: ${multiplicacao.toFixed(1)}`)
}
main()

function eh_maior(n1,n2){
    if(n1 > n2){
        return n1
    }
    else{
        return n2
    }
}

function eh_menor(n1,n2){
    if(n1 > n2){
        return n2
    }
    else{
        return n1
    }
}