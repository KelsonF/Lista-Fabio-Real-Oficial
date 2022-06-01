import { input,print } from "../io_utils.js";

function main(){
    let numeros = input('Digite dois numeros: ')
    let [X,N] = numeros.split(' ').map(Number)

    while(N>2){
        X = X/N
        N--
    }
    console.log(X)
}
main()