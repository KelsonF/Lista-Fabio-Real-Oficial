import { input,print } from "../io_utils.js";

function main(){
    let numero = input("Digite um numero: ")

    let resultado = numero/2
    let contador = 0

    while(resultado >= 1){
        resultado = resultado / 2
        contador++
    }
    console.log(`${contador} divisões: ${resultado}`)
}
main()