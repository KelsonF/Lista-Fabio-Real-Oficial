// Leia um vetor com N elementos, encontre e escreva o maior e o menor elemento e suas respectivas
// posições no vetor.

import { vetor, numero } from "../io_utils.js";

function main(){
    let N = numero("N: ")
    let array = vetor(N) 

    for(let  i = 0; i < array.length; i++){
        array[i] = numero("Valor: ")
    }

    const maiorElemento = maior(array)
    const menorElemento = menor(array)

    console.log(`O maior elemento: ${maiorElemento}`)
    console.log(`O menor elemento: ${menorElemento}`)
}

function maior(vetor){
    let maior = 0

    for(let elemento in vetor){
        if(vetor[elemento] > maior){
            maior = vetor[elemento]
        }

    }

    return maior
}

function menor(array){
    let menor = array[0]

    for(let elemento in array){
        if(array[elemento] < menor){
            menor = array[elemento]
        }
    }

    return menor
}

main()