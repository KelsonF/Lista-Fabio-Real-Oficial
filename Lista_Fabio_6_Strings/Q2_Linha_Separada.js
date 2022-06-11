// 2. Leia uma frase e mostre cada palavra da frase em uma linha separada.

import { input } from "../io_utils.js";

function main(){
    let frase = input("Frase: ").split(" ")

    let palavras = ''

    for(let words in frase){
        palavras = frase[words]

        console.log(`${words}: ${palavras}`)
    }

    
}

main()