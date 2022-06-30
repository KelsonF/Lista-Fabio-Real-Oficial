import { numero_aleatorio } from './io_utils.js'

export function nova_matriz(linhas, colunas){
    const matriz = new Array(linhas)

    for (let i = 0; i < linhas; i++){
        matriz[i] = new Array(colunas)
    }

    return matriz
}

export function preencher_matriz_automaticamente(matriz, minimo, maximo){

    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            matriz[i][j] = numero_aleatorio(minimo, maximo)
        }
    }

    return matriz
}

export function copiar_matriz(matriz){
    const matriz_copia = novo_vetor(matriz.length)

    for (let i = 0; i < matriz.length; i++){
        matriz_copia[i] = novo_vetor(matriz[i].length)
        for (let j = 0; j < matriz_copia[i].length; j++){
            matriz_copia[i][j] = matriz[i][j]
        } 
    }

    return matriz_copia
}

export function transpor_matriz(matriz) {
    const matriz_transposta = nova_matriz(matriz[0].length, matriz.length)

    for(let i = 0; i < matriz_transposta.length; i++ ) {
        for (let j = 0; j < matriz_transposta[i].length; j++) {
            matriz_transposta[i][j] = matriz[j][i]
        }
    }

    return matriz_transposta
}

export function soma_diagonal_principal(matriz){
    let soma_diagonal = 0;
    let soma_resto = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if(i === j){
                soma_diagonal += matriz[i][j]
            } else {
                soma_resto += matriz[i][j]
            }
        }
    }

    return [soma_diagonal, soma_resto]
}