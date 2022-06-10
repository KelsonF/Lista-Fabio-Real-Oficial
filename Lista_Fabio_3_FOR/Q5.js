import { input,print } from "../io_utils.js";

function main(){
    let numero = Number(input("Dfigite um numero: "))
    let fatorial = 1

    for(let i = numero; i !== 0; i--){
        fatorial *= i
    }
    print(`Fatorial: ${fatorial}`)
}
main()