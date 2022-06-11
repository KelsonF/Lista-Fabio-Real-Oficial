// 2. Leia um vetor A com N elementos, verifique e escreva se existem ou não elementos iguais no vetor.

import { input,print } from "../io_utils.js";

function main(){
    let N = Number(input("Numero: "))
    
    let vetor_a = new Array(N)

    for (let index = 0; index < vetor_a.length; index++) {

        vetor_a[index] = Number(input("Valores: "))   
    }

    if (valores_iguais(vetor)){
        console.log('Há elementos repetidos!')
    }else{
        console.log('Não há elementos repetidos!')
    }

}

function valores_iguais(vetor) {

    for (let elemento of vetor){
        
        if (contar_ocorrencia_em_vetor(vetor, elemento) > 1){
            return true
        } 
    }

    return false
}

function contar_ocorrencia_em_vetor(vetor, elemento_a_contar){

    let contador = 0
    let elemento_atual

    for (let i = 0; i < vetor.length; i++){
        elemento_atual = vetor[i]
        if (elemento_atual === elemento_a_contar){
            contador++
        }
    }

    return contador
}

main()