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

  
}
main()

function ganhador(valor1, valor2) {
    if(valor1 > 21 || valor2 > 21){
        if(valor1 - valor2 ===2 || valor2 - valor1 === 2){
            return true
        }
    }else if(valor1 === 21 || valor2  ===21){
        if((valor1-valor2 >=2) || (valor2 - valor1 >= 2)){
            return true
        }
    } 

    return false
}

main()