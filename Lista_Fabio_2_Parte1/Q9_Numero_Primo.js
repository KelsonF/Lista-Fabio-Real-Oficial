import { input,print } from "../io_utils.js";

function main(){
    const numero = Number(input("Digite um numero entre 0 e 100: "))
    const tipo_do_numero = numero_primo(numero)
    print(`O numero ${numero} ${tipo_do_numero}`)
}
function numero_primo(n){
    let numero = ""
    if(n % n == 0){
        numero = "é primo"
        if(n > 2 && n % 2 == 0)numero = "não é primo"
        else if(n > 3 && n % 3 == 0)numero = "não é primo"
        else if(n > 5 && n % 5 == 0) numero = "não é primo"
        else if(n > 7 && n % 7 == 0) numero = "não é primo"  
    }
    return numero
}
main()