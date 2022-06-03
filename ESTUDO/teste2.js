import { input,print} from '../io_utils.js'

function main(){
    const horarios = input('Horarios: ')
    const valores = horarios.split(" ").map(Number)
    const horas_inicio = valores[0]
    const minutos_inicio = valores[1]
    const hora_termino = valores[2]
    const minutos_termino = valores[3]

    const resultado = duracao_horas(horas_inicio, hora_termino, minutos_inicio, minutos_termino)
    const horas = resultado[0]
    const minutos = resultado[1]

    console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)
}
main()

function duracao_horas(valor1, valor2, valor3, valor4){
    let duracao_horas = 0
    let duracao_minutos = 0


    if(valor1 > valor3){
        duracao_horas = (24 - valor1) + valor3

        if(valor2 > valor4){
            duracao_minutos = (60 - valor2) + valor4
        }
        else if(valor2 < valor4){
            duracao_minutos = (60 - valor2) + valor4 
        }
    }
    else if(valor1 < valor3){
        duracao_horas = (valor3 - valor1)

        if(valor2 < valor4){
            duracao_minutos = (valor4 - valor2)
        }
    }
    else if(valor1 === valor3){
        duracao_horas = 24

        if(valor2 === valor4){
            duracao_minutos = 0
        }
    }

    return [duracao_horas,duracao_minutos]
}