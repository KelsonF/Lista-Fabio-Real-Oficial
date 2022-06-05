import { input,print } from "../io_utils.js";

function main(){
    let lista = []

    let X = Number(input("Digite um numero: "))

    let atual = Number(input("Numero: "))
    let subsequente = Number(input("Numero: "))

    while((atual + subsequente) !== X){
        atual = subsequente
        subsequente = Number(input("Numero: "))

        lista.push(atual)
    }
    print(lista)
}
main()