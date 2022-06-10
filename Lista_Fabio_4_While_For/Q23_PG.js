import { print,input } from "../io_utils.js";

function main(){
    let N = Number(input("Numero: "))

    let termo = Number(input("Numero: "))
    let razao = Number(input("Numero: "))

    let valor = 1

    while(valor <= N){
        print(`Termo ${valor}: ${termo}`)
        termo = (razao * termo)

        valor++
    }
}
main()