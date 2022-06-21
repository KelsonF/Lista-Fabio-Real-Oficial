import { numero,vetor } from "../io_utils.js";


function main(){
    let vetorA = vetor(20)

    for(let i = 0; i < vetorA.length; i++){
        vetorA[i] = numero("Valor: ")
    }


    const S = somaElementos(vetorA)
}

function somaElementos(array){
    let soma = 0

    for(let i = 0, j = 20 ;i !== 11 && j !== 10; i++, j--){
        soma += (array[i] - array[j])
    }

    return soma
}

main()
