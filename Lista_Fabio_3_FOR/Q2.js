import { input,print } from "../io_utils.js";

function main(){
    const N = Number(input('Digite um numero: '))

    let inicio = 1

    for( let inicio = 1; inicio <= N; inicio++){
        if(inicio % 2 === 0){
            print(inicio)
        }
    }
}
main()