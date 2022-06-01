import { input,print } from "../io_utils.js";

function main(){
    let numero = Number(input("Dfigite um numero: "))
    let fatorial = 1

    while(numero !== 0 ){
        fatorial *= numero
        numero--
    }
    print(`Fatorial: ${fatorial}`)
}
main()