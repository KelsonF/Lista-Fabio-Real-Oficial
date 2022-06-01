import { input,print } from "../io_utils.js";

function main(){
    const N = Number(input("Numero: "))

    let contador = 0
    let soma = 0

    while(contador <= N){
        soma =+ soma + (1/contador)
        contador++
    }
    print(`O valor de S: ${soma}`)
}
main()