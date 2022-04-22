import { input,print } from "../io_utils.js";

function main(){
    const number1 = Number(input("Digite um numero inteiro: "))
    const number2 = Number(input("Digite um numero inteiro: "))
    const maior = Numero_maior(number1, number2)
    const menor = Numero_menor(number1,number2)
    print(`${maior} e maior do que ${menor}`)
}
function Numero_maior(n1,n2){
    let maior = 0
    if(n1>n2) maior = n1
    else if(n1<n2) maior = n2 
    return maior
}
function Numero_menor(n1,n2){
    let menor = 0
    if(n1>n2) menor = n2
    else if(n1<n2) menor = n1 
    return menor
}
main()
