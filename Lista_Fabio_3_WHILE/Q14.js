import {input, print} from "../io_utils.js"

function main(){
    let maior_quadrado = 0 
    const N = Number(input("Numero: "))

    let contador = 1

    while(contador**2 <= N){
        maior_quadrado = contador**2
        contador++
    }
    print(`Maior quadrado: ${maior_quadrado}`)
}
main()