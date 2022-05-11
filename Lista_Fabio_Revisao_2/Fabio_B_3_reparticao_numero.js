import { input,print } from "../io_utils.js";

function main(){
    const numero =  Number(input('Digite um numero inteiro: '))

    const centenas = Math.trunc(numero/100)
    const dezenas = Math.trunc(numero%100/10)
    const unidades = (numero%100)%10
    
    const verificar1 = verificar_centenas(centenas)
    const verificar2 = verificar_dezenas(dezenas)
    const verificar3 = verificar_unidades(unidades)

    print(`Temos um total de ${centenas} ${verificar1}, ${dezenas} ${verificar2} e ${unidades} ${verificar3}`)
}
function verificar_centenas(C){
    if(C === 1){
        return 'Centena'
    }
    else{
        return 'Centenas'
    }
}
function verificar_dezenas(d){
    if(d === 1){
        return 'Dezena'
    }
    else{
        return 'Dezenas'
    }
}
function verificar_unidades(u){
    if(u === 1){
        return 'Unidade'
    }
    else{
        return 'Unidades'
    }
}
main()