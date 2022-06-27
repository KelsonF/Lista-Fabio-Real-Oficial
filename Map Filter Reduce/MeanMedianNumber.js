import { input } from '../io_utils.js'
import { mediana_vetor, media_elementos_vetor, preencher_vetor, vetor } from '../io_utils_vetor.js'

function main(){
    let tamanhoVetor = Number(input("Tamanho vetor: "))
    let array = vetor(tamanhoVetor)
    const vetorPreenchido = preencher_vetor(array)

    const mediaElementos = media_elementos_vetor(vetorPreenchido)
    const medianaVetor = mediana_vetor(vetorPreenchido)

    console.log(`A media dos elementos eh:`,mediaElementos)
    console.log(`A mediana do vetor eh:`,medianaVetor)
}

main()