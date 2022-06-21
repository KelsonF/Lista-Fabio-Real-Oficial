// Leia um vetor A de N elementos e escreva um vetor B de N elementos, conforme a seguinte condição:
// se índice de A[índice] é par então B[índice] = 0, caso contrário B[índice] = 1.

import { vetor, numero } from "../io_utils.js";

function main(){
    let N = numero("N: ");
    let arrayA = vetor(N);

    for(let i = 0; i < arrayA.length; i++){
        arrayA[i] = numero("Valor: ")
    }

    const arrayB = vetorDiferenciado(arrayA,N)
    
    console.log(arrayA)
    console.log(arrayB)
}

function vetorDiferenciado(array,tamanho){
    let arrayB = vetor(tamanho)
    let j = 0

    for(let elemento in array){
        if(array[elemento] % 2 === 0){
            arrayB[j] = 0
        
        }
        else{
            arrayB[j] = 1
        }

        j++
    }

    return arrayB
}

main()