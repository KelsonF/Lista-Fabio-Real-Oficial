import { numero, preencher_vetor, vetor } from './io_utils.js'

function main(){
    let tamanhoVetor = numero("Tamanho: ")
    let criar_vetor = vetor(tamanhoVetor)
    let array = preencher_vetor(criar_vetor)

    const vetor_ordenado = ordenar_vetor_bubble(array)

    console.log(vetor_ordenado)
}

function ordenar_vetor_bubble(vetor){
    let tamanho = vetor.length;
    let auxiliar;
    let k = 0;

    for (let i = 0; i < tamanho - 1; i++) {
        for (let j = 0; j < tamanho - 1 - k; j++) {
            if(vetor[j] > vetor[j + 1]){
                auxiliar = vetor[j]
                vetor[j] = vetor[j + 1]
                vetor[j + 1] = auxiliar
            }
            
        }
    
        k++
    }

    return vetor
}


main()