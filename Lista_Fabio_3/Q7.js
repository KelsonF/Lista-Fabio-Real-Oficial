import { input,print } from "../io_utils.js";

function main(){
    let numero = Number(input("Digite um numero: "))

    let inicio = 0
    let soma = 0

    while(inicio < numero){
        inicio ++
        soma += inicio
    }
    print(`A soma dos valores eh: ${soma}`)
}
main()