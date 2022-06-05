//12. Leia vários códigos do jogador (1 ou 2) que ganhou o ponto, em uma partida de pingue-pongue, e
//responda quem ganha a partida. A partida chega ao final se:
//· Um dos jogadores chega a 21 pontos e a diferença de pontos entre os jogadores é maior ou igual a 2.
//· Se a primeira não for atendida, ganha aquele que, com mais de 21 pontos, consiga colocar uma
//diferença de 2 pontos sobre o adversário.

import { input,print } from "../io_utils.js";

function main(){
    let pontuador = Number(input('Quem pontuou (1 ou 2): '));

    let pontuacao_jogador_1 = 0;
    let pontuacao_jogador_2 = 0;

    while(pontuacao_jogador_1 <= 21 || pontuacao_jogador_2 <= 21){

        if(pontuador === 1){
            pontuacao_jogador_1++
        }
        else if(pontuador === 2){
            pontuacao_jogador_2++
        }

    pontuador = Number(input('Quem pontuou (1 ou 2): '));
        if(!empate(pontuacao_jogador_1,pontuacao_jogador_2)){
            if(pontuacao_jogador_1 === 21){
                print(`Jogador 1 venceu`)
                print(`Pontuacao: ${pontuacao_jogador_1}`)
            }
            else if(pontuacao_jogador_2 === 21){
                print(`Jogador 2 venceu`)
                print(`Pontuacao: ${pontuacao_jogador_2}`)
            }


        }

    }
}
main()

function empate(valor1, valor2){
    if(valor1 === 20 && valor2 === 20){
        
    }
}