import { 
    nova_matriz, 
    preencher_matriz_automaticamente, 
    soma_diagonal_principal 
} from '../io_utils_matriz.js'

import { numero } from '../io_utils.js'

function main(){
    const linhas = numero("Numero de linhas: ")
    const colunas = linhas

    const matriz = nova_matriz(linhas, colunas)
    const matriz_preenchida = preencher_matriz_automaticamente(matriz, 1, 10)
    console.table(matriz_preenchida)

    const somatorio_diagonal_principal = soma_diagonal_principal(matriz_preenchida)[0]
    const somatorio_resto = soma_diagonal_principal(matriz_preenchida)[1]
    console.log(`Soma:`,somatorio_diagonal_principal)
    console.log(`Soma resto:`,somatorio_resto)
}

main()