import { input,print} from '../io_utils.js'

function main(){
    const number1 = Number(input("Digite um numero inteiro: "))
    const number2 = Number(input("Digite um numero inteiro: "))
    const number3 = Number(input("Digite um numero inteiro: "))

    const resposta = numero_maior(number1, number2, number3)

    print(`Existem ${resposta} numeros iguais`)
}
function numero_maior(n1,n2,n3){
    let resultado = 0

    if(n1===n2 & n2===n3){
        resultado = 3
    }
    else if(n1===n2){
        resultado = 2
    }
    else if(n1===n3){
        resultado = 2
    }
    else if(n2===n3){
        resultado = 2
    }
    
    return resultado
}
main()
