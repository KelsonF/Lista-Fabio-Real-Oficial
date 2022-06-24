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

export function vetor(tamanho_vetor){
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

export function fibonacci(valor){
    const arrayFibonacci = new Array(valor);
    let soma = 0
    let anterior = 0
    let atual = 1
    let j = 0

    for(let i = 0; i < arrayFibonacci.length; i++){
        soma = anterior + atual
        arrayFibonacci[j] = anterior
        anterior = atual
        atual = soma

        j++
    }

    return arrayFibonacci
}

export function preencher_vetor(vetor){
    for(let i = 0; i < vetor.length; i++){
        vetor[i] = Number(input("Valor: "))

    }

    return vetor
}

export function ordenar_vetor_bubble(vetor){
    let tamanho = vetor.length;
    let auxiliar;
    let k = 0;

    for (let i = 0; i < tamanho - 1; i++) {
        for (let j = 0; j < tamanho - 1 - k; j++) {
            if(vetor[j] > vetor[j + 1]){
                auxiliar = vetor[j]
                vetor[j] = vetor[j + 1]
                vetor[j + 1] = auxiliar
            }
            
        }
    
        k++
    }

    return vetor
}