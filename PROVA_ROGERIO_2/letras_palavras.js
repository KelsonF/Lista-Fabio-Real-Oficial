import { input,print } from "../io_utils.js";

function main(){
    const frase = input('Digite uma frase: ')
    
    for(let palavras of frase){
        console.log(palavras)
    }
}
main()