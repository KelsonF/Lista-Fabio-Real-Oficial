import { input,print} from '../io_utils.js'

function main(){
    const horarios = input('Horarios: ')
    const valores = horarios.split(" ").map(Number)
    const horas_inicio = valores[0]
    const minutos_inicio = valores[1]
    const hora_termino = valores[2]
    const minutos_termino = valores[3]

    const resultado1 = duracao_horas(horas_inicio,hora_termino)
    const resultado2 = duracao_minutos(minutos_inicio,minutos_termino)

    console.log(`O JOGO DUROU ${resultado1} HORA(S) E ${resultado2} MINUTO(S)`)
}
main()

function duracao_horas(valor1, valor3){
    let duracao = 0
    if(valor1 > valor3){
        duracao = (24 - valor1) + valor3
    }
    else if(valor1 < valor3){
        duracao = (valor3 - valor1)
    }
    else if(valor1 === valor3){
        duracao = 24
    }
    return duracao
}

function duracao_minutos(valor2,valor4){
    let duracao = 0
    if(valor2 > valor4){
        duracao = (60 - valor2) + valor4
    }
    else if(valor2 < valor4){
        duracao = (valor2 - valor4)
    }
    else if(valor2 === valor4){
        duracao = 0
    }
    return duracao
}