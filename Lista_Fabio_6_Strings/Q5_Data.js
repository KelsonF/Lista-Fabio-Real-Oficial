// 5. Leia uma data no formato DD/MM/AAAA e escreva o mês por extenso (DD de mês de AAAA).

import { texto,numero } from '../io_utils.js'

function main(){
    let data = texto("Digite a data(dd/mm/aaaa): ").split("/").map(Number)

    let dia = data[0]
    let mes = data[1]
    let ano = data[2]
    
    const nome_mes = calcular_mes(mes)

    console.log(`${dia} de ${nome_mes} de ${ano}`)
    
}

function calcular_mes(mes){
    if(mes === 1){
        return 'Janeiro'
    }
    else if(mes === 2){
        return 'Fevereiro'
    }
    else if(mes === 3){
        return 'Marco'
    }
    else if(mes === 4){
        return 'Abril'
    }
    else if(mes === 5){
        return 'Maio'
    }
    else if(mes === 6){
        return 'junho'
    }
    else if(mes === 7){
        return 'Julho'
    }
    else if(mes === 8){
        return 'Agosto'
    }
    else if(mes === 9){
        return 'Setembro'
    }
    else if(mes === 10){
        return 'Outrubro'
    }
    else if(mes === 11){
        return 'Novembro'
    }
    else if(mes === 12){
        return 'Dezembro'
    }
}

main()