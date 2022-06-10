/*1. Faça a criptografia de uma frase digitada pelo usuário. Na criptografia, a frase deverá ser invertida e as
consoantes deverão ser substituídas pelo caractere #.
*/

import { input,print } from "../io_utils.js";

function main(){
    let frase = input("Frase: ")

    frase = inverter_frase(frase)

    frase = trocar_consoante(frase, '#')

    console.log(frase)
}

function inverter_frase(frase){
    let nova_frase = ""
    let index = frase.length - 1

    while (index >= 0){
        nova_frase = nova_frase + frase[index]
        index--
    }

    return nova_frase
}

function trocar_consoante(frase,caracter){
    let nova_frase = ''

    let index = 0

    while (index < frase.length){
        if (eh_consoante(frase[index])){
            nova_frase += caracter
        }else{
            nova_frase += frase[index]
        }
        index++
    }

    return nova_frase
}

function eh_consoante(caracter){
    return (eh_letra(caracter) && !eh_vogal(caracter))
}

function eh_letra(caracter){
    return (eh_letra_minuscula(caracter) 
        || eh_letra_maiuscula(caracter))
}

function eh_letra_maiuscula(letra){
    const codigo = letra.charCodeAt(0)

    return (codigo >= 65) && (codigo <= 90)
}

function eh_letra_minuscula(letra){
    const codigo = letra.charCodeAt(0)

    return (codigo >= 97) && (codigo <= 122)
}

function eh_vogal(caracter){
    const vogais = 'aeiouAEIOU'
    for (let vogal of vogais){
        if (vogal === caracter){
            return true
        }
    }

    return false
}

main()