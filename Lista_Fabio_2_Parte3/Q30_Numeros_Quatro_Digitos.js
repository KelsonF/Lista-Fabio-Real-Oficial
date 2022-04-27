import { input,print } from "../io_utils.js";

function main(){
    const numero = Number(input("Digite um numero de 4 digitos: "))
    
    const resultado = quad_original(numero)
    print(resultado)
}
function quad_original(num){
    const milCent = Math.trunc(num/100)
    const dezUn = num % 100
    const num3 = milCent - dezUn

    if(num3*num3 === num) return "Respeita a condicao"
    else return "Nao obedece a condicao"
}
main()