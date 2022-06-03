import { input,print } from "../io_utils.js";

function main(){
    const N = Number(input('Digite um numero: '))

    let inicio = 1

    while(inicio <= N){
        print(inicio)
        inicio++
    }
}
main()