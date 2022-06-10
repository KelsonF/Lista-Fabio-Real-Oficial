import {print, input} from "../io_utils.js";

function main(){

    const taxaCrescimentoA = 3.5 / 100;
    const taxaCrescimentoB = 1.35 / 100;

    let populacaoA = 200000;
    let populacaoB = 800000;

    let anos = 0;
    while(populacaoA < populacaoB){
        populacaoA += Math.trunc(populacaoA * taxaCrescimentoA);
        populacaoB += Math.trunc(populacaoB * taxaCrescimentoB);

        anos++;
    }

    print(`Demorou ${anos} para que a cidade B superasse a Cidade A`)

}

main();