import { input } from '../io_utils.js'
import { eh_palindromo } from '../io_utils_strings.js'

function main(){
    const palavra = input("Palavra: ")
    const teste_de_palindromo = eh_palindromo(palavra)

    if(teste_de_palindromo){
        console.log("Eh palindromo")
    } else{
        console.log("Nao eh palindromo")
    }
    
}

main()