// 6. Leia uma frase e gere uma nova frase, substituindo o algarismo que aparecer na frase por seu extenso.

import { texto, numero, eh_numero } from '../io_utils.js'

function main(){
    let frase = texto("Frase: ")

    let frase_codificada = numero_por_extenso(frase)

    console.log(frase_codificada)
}

function numero_por_extenso(frase){

    const numeros_por_extenso = [
        'zero', 'um', 'dois', 'três', 'quatro', 
        'cinco', 'seis', 'sete', 'oito','nove',
    ]

    let nova_frase = ''

    for(let elemento of frase){
        if(eh_numero(elemento)){
            nova_frase += numeros_por_extenso[elemento]
        }
        else{
            nova_frase += elemento
        }
    }

    return nova_frase
}

main()