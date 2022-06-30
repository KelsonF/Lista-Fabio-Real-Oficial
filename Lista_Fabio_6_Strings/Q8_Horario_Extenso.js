// 8. Leia uma string no formato hh:mm:ss e escreva o resultado na seguinte forma: “hh hora(s), mm
// minuto(s) e ss segundo(s)”.

import { input } from '../io_utils.js'

function main(){
    const horario = input("Tempo(hh:mm:ss): ").split(":").map(Number) 

    const horas = horario[0]
    const minuto = horario[1]
    const segundos = horario[2]

    console.log(`${horas} hora(s), ${minuto} minuto(s) e ${segundos} segundo(s)`)
}

main()