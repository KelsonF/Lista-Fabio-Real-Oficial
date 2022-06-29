//Mapear os valores e um array para o seu dobro
import { criar_vetor, map_vetor } from '../io_utils_vetor.js'

function main(){
    const vetor = criar_vetor(5)
    console.log(vetor)

    const vetor_mapeado = map_vetor(vetor,dobrar)
    console.log(vetor_mapeado)
}

function dobrar(item){
    return (item * 2)
}

main()
