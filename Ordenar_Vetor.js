import {vetor, numero} from "./io_utils.js"

function main(){
    const N = numero("Numero: ")
    let array = vetor(N)

    let menor = 0

    for (let i = 0; i < array.length ; i++) {
        array[i] = numero("Numero: ")    
    }

    console.log(array)
}

main()