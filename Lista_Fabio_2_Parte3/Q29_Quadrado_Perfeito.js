import { input,print } from "../io_utils.js";

function main(){
    const numero = Number(input("Digite um numero de 4 digitos: "))

    const resultado = quadrado_perfeito(numero)

    print(resultado)
}
function quadrado_perfeito(n){
    const dez1 = Math.trunc(n/100)
    const dez2 = n % 100
    
    if(dez1 + dez2 === Math.sqrt(n)) return "E um quadrado perfeito"
    else "Nao e qudrado perfeito"
}
main()