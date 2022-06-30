import { input } from '../io_utils.js'
import { contar_palavras } from '../io_utils_strings.js'

function main(){
    const frase = input("Frase: ")

    const quantidade_de_palavras = contar_palavras(frase)

    console.log("Quantidade de palavras:",quantidade_de_palavras)
}

main()