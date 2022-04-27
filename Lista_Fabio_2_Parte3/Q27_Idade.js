import { input,print } from "../../io_utils.js"

function main() {
    const data_atual = input(' Digite a data atual: dd/mm/aaaa ')
    const [dia_atual, mes_atual, ano_atual] = data_atual.split('/').map(Number)

    const data_nasc = input(' Digite sua data de nascimento: dd/mm/aaaa ')
    const [dia_nasc, mes_nasc, ano_nasc] = data_nasc.split('/').map(Number)
    
    const resultado = idade(dia_atual, mes_atual, ano_atual, dia_nasc, mes_nasc, ano_nasc)

    print(`a idade é ${resultado}`)
}
function idade(dia1, mes1, ano1, dia2, mes2, ano2) {
    let dif_ano = ano1 - ano2
    let dif_mes = mes1 - mes2
    let dif_dia = dia1 - dia2

    if (dif_mes < 0) {
        return idade - 1

    } else if (dif_mes === 0 && dif_dia < 0) {
        return idade - 1
    }
    return `${dif_ano} anos, ${dif_mes} mês(es) e ${dif_dia} dia(s)`
}
main()
