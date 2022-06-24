import { preencher_vetor, vetor } from '../io_utils.js'

function main(){
    const novoArray = vetor(7)
    const arrayPreenchido = preencher_vetor(novoArray)

    const somaValores = soma_de_positivos(arrayPreenchido)

    console.log(`A soma de valores positivos eh: ${somaValores}`)
}

function soma_de_positivos(array){
    let soma = 0

    for(let elemento in array){
        if(array[elemento] > 0){
            soma += array[elemento]
        }
    }

    return soma
}

main()