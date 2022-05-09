import { Console } from 'console'
import prompt from 'prompt-sync'
import  {loadfile} from './ler_arquivos.js'


const input = prompt()

function main(){
    let menu = '**** ROGERPLAY ****'
    menu += '\n1 - Palavras com mais de N letras'
    menu += '\n2 - Mostrar e Contar palavras sem uma determinada letra'
    menu += '\n3 - Upgrade de plano'
    menu += '\n\n0 - Sair'

    const palavras = loadfile().split('\n')

    console.log(`${palavras.length} carregadas!`)

    console.log(menu)
    let opcao = Number(input())
    while (opcao !== 0){ 
        if (opcao === 1){
            palavras_com_mais_20_letras(palavras)
        }else if (opcao === 2){
            has_no_e(palavras)
        }else if (opcao === 3){
            
        }

        input('<enter> para continuar...')
        console.clear()
        console.log(menu)
        opcao = Number(input())
    }

    console.log('Fim!')
}
function palavras_com_mais_20_letras(palavras){
    let contador = 0
    for(let letras of palavras){
        if(letras.length === 20){
            console.log(palavras)
            contador++
        }
    }
    const percentual = Number(contador/palavras.length)*100
    console.log(`Existem ${contador} com mais de 20 letras, que correspondem a ${percentual.toFixed(3
        )} do total de palavras`)
}
function has_no_e(palavras){
    let contador = 0
    for(let palavra of palavras){
        if(has_no_letter){
            console.log(palavra)
            contador++
        }
    }
    const percentual = (contador/palavra)*100
    Console.log(`O numero de palavras sem a letra "e" eh igual a ${contador}, que corresponde a ${percentual.toFixed(2)} %`)
}

function has_no_letter(palavras){
    for(let letter of palavras){
        if(letter === "e"){
            return false
        }
    }
    return true
}
main()