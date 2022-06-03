//Em uma eleição presidencial existem 3 (três) candidatos. Os votos são informados através de códigos.
//Os dados utilizados para a contagem dos votos obedecem à seguinte codificação:
//· 1, 2, 3 = voto para os respectivos candidatos;
//· 9 = voto nulo;
//· 0 = voto em branco;
//Escreva um algoritmo que leia o código votado por N eleitores. Ao final, calcule e escreva:
//a) total de votos para cada candidato;
//b) total de votos nulos;
//c) total de votos em branco;
//d) quem venceu a eleição.


import { input,print } from "../io_utils.js";

function main(){
    const N = Number(input("Numero de eleitores: "))

    let votos_candidato_1 = 0
    let votos_candidato_2 = 0
    let votos_candidato_3 = 0
    let votos_nulos = 0
    let votos_brancos = 0
    
    let contador = 1

    while(contador < N){
        const tipo_voto = Number(input("Digite o tipo do seu voto (1,2,3,9,0): "))

        if(tipo_voto === 1){
            votos_candidato_1++
        }
        else if(tipo_voto === 2){
            votos_candidato_2++
        }
        else if(tipo_voto === 3){
            votos_candidato_3++
        }
        else if(tipo_voto === 9){
            votos_nulos++
        }
        else if(tipo_voto === 0){
            votos_brancos++
        }
        else{
            print("ERRO")
        }

    contador++

    }
    const candidato_vencedor = quem_ganhou_eleicao(votos_candidato_1,votos_candidato_2,votos_candidato_3)

    print(`VOTOS CANDIDATO 1: ${votos_candidato_1}`)
    print(`VOTOS CANDIDATO 2: ${votos_candidato_2}`)
    print(`VOTOS CANDIDATO 3: ${votos_candidato_3}`)
    print(`VOTOS BRANCOS: ${votos_brancos}`)
    print(`VOTOS NULOS: ${votos_nulos}`)
    print(`O VENCEDOR FOI: ${candidato_vencedor}`)
}
main()

function quem_ganhou_eleicao(c1,c2,c3){
    
    if(c1 > c2 && c2 > c3){
        return "Candidato 1"
    }
    else if(c2 > c1 && c1> c3){
        return "Candidato 2"
    }
    else if(c3 > c1){
        return "Candidato 3"
    }
}