import { input,print } from "../io_utils.js";

function main(){
    const opcao = Number(input("Digite um numero entre 0 e 4(1,2,3):"))
    const num1 = Number(input('Digite um numero:'))
    const num2 = Number(input('Digite um numero:'))
    const num3 = Number(input('Digite um numero:'))

    const resultado = checagem(opcao,num1,num2,num3)

    print(resultado)
}
function checagem(valor_principal,valor1,valor2,valor3){
    let valor = 0
    if(valor_principal === 1)valor = valor1
    else if(valor_principal === 2)valor =valor2
    else if(valor_principal === 3)valor = valor3
    else valor = "ERRO"
    return valor
}
main()