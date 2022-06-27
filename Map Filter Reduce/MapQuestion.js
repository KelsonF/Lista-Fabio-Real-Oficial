//Mapear os valores e um array para o seu dobro
import { preencher_vetor, vetor } from '../io_utils_vetor.js'

function main(){
    const newArray = vetor(5)

    const arrayPreenchido = preencher_vetor(newArray)

    console.table(arrayPreenchido)

    const vetor_mapeado = vetor_dobrado(arrayPreenchido)

    console.table(vetor_mapeado)
}
function vetor_dobrado(vetor){

    for (let i = 0; i < vetor.length; i++){
        vetor[i] = vetor[i] * 2
    }

    return vetor

}

main()