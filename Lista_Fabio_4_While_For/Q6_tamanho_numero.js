import { input,print } from "../io_utils.js";

function main(){
    const numero = (input("Digite um numero: "))

    let contador = 1

    while(contador < numero.length){
        contador++
    }
 
   print(`Numero de digitos: ${contador}`)
}
main()
