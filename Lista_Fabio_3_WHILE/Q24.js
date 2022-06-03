//A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e
//número de filhos. Escreva um algoritmo que leia o salário e o número de filhos de N habitantes e
//escreva:
//a) média de salário da população;
//b) média de número de filhos;
//c) percentual de pessoas com salário de até R$ 1.000,00.

import { input,print } from "../io_utils.js";

function main(){
    const N = Number(input("Numero de habitantes: "))

    let total_filhos = 0
    let tota_salario = 0
    let salario_maior_que_mil = 0

    let contador = 1

    while(contador <= N){
        const dados_familias = input("Numero de filhos e Salario: ")
        const [numero_filhos, salário] = dados_familias.split(" ").map(Number)

        total_filhos =+ numero_filhos
        tota_salario =+ salário

        if(salário > 1000){
            salario_maior_que_mil++
        }
    
    
        contador++

    }

    const media_filhos = total_filhos / N
    const media_salario = total_filhos / N

    print(`MEDIA DE FILHOS: ${media_filhos.toFixed(2)}`)
    print(`MEDIA SALARIO: R$${media_salario.toFixed(2)}`)
    print(`SALARIOS SUPERIORES A R$1000: ${salario_maior_que_mil}`)
}
main()