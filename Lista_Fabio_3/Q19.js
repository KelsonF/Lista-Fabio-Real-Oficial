import { input,print } from "../io_utils.js";

function main(){
    const N = Number(input("Numero: "))

    let contador = 0
    let contador2 = N
    let soma = 0 

    while(contador <= N){
        soma =+ (contador/contador2)
        contador++
        contador2--

        soma =- (contador2/contador)
        contador++
        contador2--
    }
    print(`O valor de S: ${soma}`)
}
main()