import { input,print } from "../io_utils.js";

function main(){
    const number1 = Number(input("Digite um numero inteiro: "))
    const number2 = Number(input("Digite um numero inteiro: "))
    const number3 = Number(input("Digite um numero inteiro: "))
    const maior = Numero_maior(number1, number2,number3)
    print(`${maior} e maior`)
}
function Numero_maior(n1,n2,n3){
    let maior = 0
    if(n1>n2 & n1>n3) maior = n1
    else if(n2>n1>n3) maior = n2
    else if(n2>n3& n2>n1) maior = n2
    else maior = n3
    return maior
}
main()