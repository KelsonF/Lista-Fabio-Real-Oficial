import { input,print } from "../io_utils.js";

function main(){
    let numero = 1
    let multiplicador = 1
    let op = 0

    for(;multiplicador < 10;){
        while(numero < 10){
            numero++
        }
        print(`${numero} X ${multiplicador} = ${op}`)
    multiplicador++
    op = numero * multiplicador
    }
}
main()
