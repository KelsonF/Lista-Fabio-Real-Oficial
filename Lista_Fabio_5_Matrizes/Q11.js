import { numero } from '../io_utils.js'
import { nova_matriz, preencher_matriz_automaticamente, transpor_matriz } from '../io_utils_matriz.js'

function main(){
    const linhas = numero("Informe o numero de linhas: ")
    const colunas = numero("Informe o numero de colunas: ")

    const minimo = numero("Valor minimo: ")
    const maximo = numero("Valor maximo: ")

    let matriz = nova_matriz(linhas,colunas)
    let matriz_preenchida_1 = preencher_matriz_automaticamente(matriz, minimo, maximo)
    console.table(matriz_preenchida_1)

    let matriz_transposta = transpor_matriz(matriz_preenchida_1)
    console.table(matriz_transposta)
}

main()