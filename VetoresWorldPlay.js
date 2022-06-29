//QUESTAO SENDO ATUALIZADA//


import { input, numero } from './io_utils.js';
import {mostrar_menu} from './show_menu_do_krl.js'
import { criar_vetor, media_elementos_vetor, 
        resetar_valores, somar_valores_vetor, tamanho_vetor, vetor_aleatorio 
    } from './io_utils_vetor.js'

function main(){
    let enter;
    let menu;
    let option;
    let choice;
    let tamanho;
    let array;
    
    menu = mostrar_menu()
    option = numero("Selecione sua opcao: ")

    while(option !== 0){

        if(option === 1){
            console.clear()
            console.log("ESCOLHA SE QUER UM VETOR AUTOMATICO (1)")
            console.log("ESCOLHA SE QUER FAZER MANUALMENTE (2)")
            choice = numero("Escolha: ")

            if(choice === 1){
                let minimo = numero("Valor minimo do vetor: ")
                let maximo = numero("Valor maximo do vetor: ")
                tamanho = numero("Tamanho vetor: ")
                array = vetor_aleatorio(tamanho, minimo, maximo)

            }
            else if(choice === 2){
                tamanho = numero("Tamanho do vetor: ")
                array = criar_vetor(tamanho)

            }

        }
        else if(option === 2){
            console.clear()
            console.log(array)
        }
        else if(option === 3){
            console.clear()
            let valorResetado = numero("Valor para reset: ")
            let arrayResetado = resetar_valores(array,valorResetado)
            console.log(arrayResetado)
        }
        else if(option === 4){
            console.clear()
            let tamanho_do_vetor = tamanho_vetor(array)
            console.log(`Quantidade de itens:`,tamanho_do_vetor)
        }
        else if(option === 5){
            console.clear()
        }
        else if(option === 6){
            console.clear()
            let media_valores = media_elementos_vetor(array)
            console.log(media_valores)
        }
        else if(option === 7){
            console.clear()
            let soma = somar_valores_vetor(array)
            console.log(soma)
        }
        else if(option === 8){
            console.clear()
        }
        else if(option === 9){
            console.clear()
        }
        else if(option === 10){
            console.clear()
        }

        menu = mostrar_menu()
        option = numero("Selecione sua opcao: ")

    }
}

main()