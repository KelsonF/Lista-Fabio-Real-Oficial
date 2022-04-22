import { input,print } from "../io_utils.js";

function main(){
    const numero = Number(input("Digite um numero: "))
    const resultado = par_ou_impar(numero)
    print(`Esse numero ${resultado}`)
}
function par_ou_impar(N){
    let tipo_numero = ""
    if(N % 2 === 0 )tipo_numero = "é um numero par"
    else tipo_numero = "é um numero impar"
    return tipo_numero
}
main()
