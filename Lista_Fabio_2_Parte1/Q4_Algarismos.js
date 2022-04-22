import { input,print} from '../io_utils.js'

function main(){
    const numero = (input("Digite um numero de dois digitos: "))
    const dezena = Number(numero[0])
    const unidade = Number(numero[1])
    const resultado = algarismo(dezena,unidade)

    print(`${dezena} e ${resultado} em comparacao a ${unidade}`)
}
function algarismo(D,U){
    let maior = ""
    if(D===U) maior = "igual" 
    else if (D>U) maior = "Maior"
    else maior = "Menor"
    return maior
}
main()