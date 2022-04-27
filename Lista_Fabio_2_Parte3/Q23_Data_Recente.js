import { input,print } from "../io_utils.js";

function main(){
    const data_atual = input("Digite a data atual: ").split("/")
    const dia_atual = Number(data_atual[0])
    const mes_atual = Number(data_atual[1])
    const ano_atual = Number(data_atual[2])
    const data1 = input("Digite uma data a ser comparada: ").split("/")
    const dia1_atual = (data1[0])
    const mes1_atual = (data1[1])
    const ano1_atual = (data1[2])
    const data2 = input("Digite uma data a ser comparada: ").split("/")
    const dia2_atual = (data2[0])
    const mes2_atual = (data2[1])
    const ano2_atual = (data2[2])

    const resultado = mais_recente(dia_atual,mes_atual,ano_atual,dia1_atual,mes1_atual,ano_atual,ano1_atual,dia2_atual,mes2_atual,ano2_atual)
    print(resultado)
}
function mais_recente(d1,m1,a1,d2,m2,a3,d3,m3,a3){
    const dias1 = (a1*365)+(m1*30)+d1
    const dias2 = (a2*365)+(m2*30)+d2
    const dias3 = (a3*365)+(m3*30)+d3

    if((dias1-dias2)>(dias1-dias3)){
        return "A primeira data e maior"
    }
    else if((dias1-dias2)<(dias1-dias3)){
        return "A segunda data e maior"
    }
}
main()