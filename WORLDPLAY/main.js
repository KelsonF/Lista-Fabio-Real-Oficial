import * as fs from 'fs'
import { input } from "../../io_utils.js"
import * as strfunc from './string_functions.js'

function main() {
    let menu = '****KELSON`S WORLD****\n'
    menu += '1 Palavras com mais de 20 caracteres\n'
    menu += '2 Palavra dada não tenha a letra “e” nela\n'
    menu += '3 Palavra sem uma série de letras proibidas\n'
    menu += '4 Palavras que contenha uma lista de letras obrigatórias\n'
    menu += '5 Palavras que contenham todas as letras obrigatórias\n'
    menu += '6 Palavras que contenham letras em ordem alfabética\n'
    menu += '0 - End\n\n'

    const palavras = loadfile().split('\n')
    console.log(palavras.length)

    console.log(menu)

    let option = Number(input("digite uma opção: "))
    while (true) {
        if (option === 0) {
            break
        }
        if (option === 1) {
            Q9_1(palavras)
        } else if (option === 2) {
            Q9_2(palavras)
        } else if (option === 3) {
            Q9_3(palavras)
        } else if (option === 4) {
            Q9_4(palavras)
        } else if (option === 5) {
            Q9_5(palavras)
        } else if (option === 6) {
            Q9_6(palavras)
        }

        input("press enter to continue...")
        console.clear()
        console.log(menu)
        option = Number(input("digite uma opção: "))
    }
}
main()

function Q9_1(lista_palavras) {
    const result = strfunc.words_20plus_characters(lista_palavras)
    console.log(result)
    console.log(result.length)
}
function Q9_2(lista_palavras2) {
    let letra = input("digite uma letra: ")
    let counter = 0
    for (let palavra of lista_palavras2) {
        if (!strfunc.has_letter(palavra, letra)) {
            console.log(palavra)
            counter += 1
        }
    }
    console.log(`existem ${counter} palavras sem a letra "e"`)
}
function Q9_3(lista_palavras3) {
    let letras = input("digite uma serie de letras a serem evitadas: ")
    let counter = 0
    for (let palavra of lista_palavras3) {
        if (strfunc.avoids(palavra, letras)) {
            console.log(palavra)
            counter += 1
            
        }
    }
    console.log(`existem ${counter} palavras sem as letras proibidas"`)
}

function Q9_4(lista_palavras4) {
    let letras = input("digite uma serie de letras que devem estar contidas nas palavras: ")
    let counter = 0
    for (let palavra of lista_palavras4) {
        if (strfunc.uses_only(palavra, letras)) {
            console.log(palavra)
            counter += 1
        }
    }
    console.log(`existem ${counter} palavras que contem as letras obrigatórias"`)
}

function Q9_5(lista_palavras5) {
    let letras = input("digite uma serie de letras: ")
    let counter = 0
    for (let palavra of lista_palavras5) {
        if (strfunc.uses_all(palavra, letras)) {
            console.log(palavra)
            counter += 1
        }
    }
    console.log(`existem ${counter} palavras que contem as todas as letras mandatórias"`)
}

function Q9_6(lista_palavras6) {
    let counter = 0
    for (let palavra of lista_palavras6) {
        if (strfunc.is_abecedarian(palavra)) {
            console.log(palavra)
            counter += 1
        }
    }
    console.log(`existem ${counter} palavras com letras em ordem alfabética"`)
}
function loadfile() {
    try {let data = fs.readFileSync('br-sem-acentos.txt', 'utf-8')
        return data
    } catch (error) {
        throw error
    }
}