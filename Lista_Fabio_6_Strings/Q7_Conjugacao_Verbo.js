// 7. Leia um verbo regular terminado em ER e mostre sua conjugação no presente.

import {texto} from '../io_utils.js'

function main(){
    let verbo = texto("Verbo: ").toUpperCase();

    const verbo_conjugado = consjugar_verbo(verbo);

    console.log(verbo_conjugado);
}

function consjugar_verbo(verbo){
    let prefixo = verbo.split('ER')[0];
    
    let conjugação = 'CONJUGACAO';
    conjugação += `\n ${prefixo + 'O'}`;
    conjugação += `\n ${prefixo + 'ES'}`;
    conjugação += `\n ${prefixo + 'E'}`;
    conjugação += `\n ${prefixo + 'EMOS'}`;
    conjugação += `\n ${prefixo + 'EIS'}`;
    conjugação += `\n ${prefixo + 'EM'}`;

    return conjugação
}

main()