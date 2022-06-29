import { criar_vetor, filter_vetor } from '../io_utils_vetor.js'


function main(){
    let vetor = criar_vetor(5)
    console.log(vetor)

    let vetor_filtrado = filter_vetor(vetor,eh_par)
    console.log(vetor_filtrado)
}

function eh_par(item){
    if(item % 2 === 0){
        return true
    }
    else{
        return false
    }

}

main()