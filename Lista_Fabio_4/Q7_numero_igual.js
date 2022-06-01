import { input,print } from "../io_utils.js";

function main(){
    let numero = (input("Numero: "))
    let lista_numero = 0
    let index = 0

    while(lista_numero !== numero[index]){
        lista_numero++
        index++
    }
    print(numero)
    print(numero[index])
}
main()