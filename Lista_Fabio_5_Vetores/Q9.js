// 9. Leia um vetor com N elementos, ordene-o e escreva-o em ordem crescente.

import { numero, ordenar_vetor_bubble, preencher_vetor, vetor } from "../io_utils.js";

function main(){
    const N = numero("N: ")
    const array = vetor(N)
    const arrayPreemchido = preencher_vetor(array)

    const array_ordenado = ordenar_vetor_bubble(arrayPreemchido)

    console.table(array_ordenado)
}

main()