import { input,print } from "../io_utils.js";

function main(){
    const N = Number(input('Digite quantos numeros: '))
    let maior,valor
    let index = 0 
    
    maior = Number(input("Digite um numero: "))

    let contador = 1

    while(contador < N){
        contador ++
        valor = Number(input("Digite um numero: "))
        
        if(valor > maior){
            maior = valor
            index = contador
        }

    }
    print(`POSICAO: ${index}`)
    print(`MAIOR NUMERO: ${maior}`)
}
main()