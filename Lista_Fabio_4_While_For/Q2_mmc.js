import { input,print } from "../io_utils.js";

function main(){
    const numeros = input("Digite dois numeros: ")
    const [A,B] = numeros.split(" ").map(Number)

    let contador = 1
    
    while(!multiplo(contador,A) && !multiplo(contador,B)){
        contador++
    }
    print(`MMC: ${contador}`)
}
main()
function multiplo(valor1,valor2){
    valor1 % valor2 === 0
}