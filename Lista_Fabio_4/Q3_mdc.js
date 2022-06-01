import { input,print } from "../io_utils.js";

function main(){
    const numeros = input("Digite dois numeros: ")
    const [A,B] = numeros.split(" ").map(Number)

    let contador = 1
    
    while(!divisor(contador,A) && !divisor(contador,B)){
        contador++
    }
    print(`MDC: ${contador}`)
}
main()
function divisor(valor1,valor2){
    valor1 % valor2 === 0
}