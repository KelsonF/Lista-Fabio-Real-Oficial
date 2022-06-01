import { input,print } from "../io_utils.js";

function main(){
    const N = Number(input("Numero: "))

    let inferior = N
    let superior = 1
    let soma = 0

    while(inferior <= N){
        soma =+ (superior/inferior)
        superior++
        inferior--
    }
    print(`O valor de S: ${soma}`)
}
main()