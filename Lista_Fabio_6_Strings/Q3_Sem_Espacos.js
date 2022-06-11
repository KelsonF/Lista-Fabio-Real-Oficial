// 3. Leia uma frase e gere uma nova frase, retirando os espaços entre as palavras.

import { texto } from "../io_utils.js";

function main(){
    let frase = texto("Texto: ") 

    let frase_sem_espaco = substituir_espaco(frase)

    console.log(frase_sem_espaco)
}   

function substituir_espaco(string){

    let nova_frase = ''

    for(let palavra of string){

        if(palavra !== " "){
            nova_frase += palavra
        }
    }
    return nova_frase
}
main()