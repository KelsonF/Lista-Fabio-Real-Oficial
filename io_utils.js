import prompt from 'prompt-sync'

export const input = prompt({
    sigint: false
})

export function print(mensagem, ...optionalParams){
    console.log(mensagem, ...optionalParams)
}

export function numero(lista_numero){
    return Number(input(lista_numero))
}

export function texto(string){
    return input(string)
}

function vetor(tamanho_vetor){
    return new Array(tamanho_vetor)
}

export function eh_numero(elemento){
    const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    for(let numero of numeros){
        if(elemento === numero){
            return true
        }
    }
    return false
}