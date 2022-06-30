// 9. Leia um vetor com N elementos, ordene-o e escreva-o em ordem crescente.
import { numero } from "../io_utils.js";
import { criar_vetor, ordenar_vetor_crescente } from "../io_utils_vetor.js";

function main(){
    const N = numero("N: ")
    const arrayPreemchido = criar_vetor(N)

    const array_ordenado = ordenar_vetor_crescente(arrayPreemchido)

    console.table(array_ordenado)
}

main()