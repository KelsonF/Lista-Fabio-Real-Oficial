import { input,print } from "../io_utils.js";

function main(){
    const N = Number(input("Numero: "))

    let contador = 1
    let razao = 1

    while(contador <= N){
        print(razao)
        razao += (contador + 1)
        contador++

    }
}
main()