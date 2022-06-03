import { input,print } from "../io_utils.js";

function main(){
    const N = Number(input('Digite quantos numeros: '))
    let soma = 0
    let media
    
    let contador = 0
    while(contador < N){
        soma += Number(input("Digite um numero: "))
        contador++
    }
    media = soma/N
    print(`MEDIA: ${media.toFixed(2)}`)
    print(`SOMA: ${soma}`)
}
main()