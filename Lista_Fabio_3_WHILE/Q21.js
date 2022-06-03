import { input,print } from "../io_utils.js";

function main(){
    let numerador = 1
    let denominador = 1
    let soma = 0

    while(denominador <= 50){
        soma =+ (numerador/denominador)
        numerador = (numerador + 2)
        denominador++
    }
    print(`O valor de S: ${soma}`)
}
main()