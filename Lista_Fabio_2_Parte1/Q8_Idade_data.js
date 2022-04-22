import { input,print } from "../io_utils.js";

function main(){
    const data_atual = input("Informe a data atual (ex:16/04/2022): ").split("/")
    const dia_atual = Number(data_atual[0])
    const mes_atual = Number(data_atual[1])
    const ano_atual = Number(data_atual[2])

    const data_nascimento = input("Informe a data de nascimento (ex:01/09/2003): ").split("/")
    const dia_nascimento = Number(data_nascimento[0])
    const mes_nasciemnto = Number(data_nascimento[1])
    const ano_nascimento = Number(data_nascimento[2])

    const idade_real = idade_pessoa(dia_atual,mes_atual,ano_atual,dia_nascimento,mes_nasciemnto,ano_nascimento)

    print(`A idade da pessoa seria ${idade_real} anos`)
}
function idade_pessoa(dia_atual,mes_atual,ano_atual,dia_nascimento,mes_nasciemnto,ano_nascimento){
    let idade = 0
    if((ano_atual-ano_nascimento) >= 0){
        idade = ano_atual - ano_nascimento
        if(mes_atual < mes_nasciemnto)
        idade =(ano_atual - ano_nascimento) - 1
        else if(dia_atual < dia_nascimento)
        idade = (ano_atual - ano_nascimento) -1
    }
    return idade
}
main()