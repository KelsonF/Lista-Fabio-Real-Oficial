import { input,print } from "../io_utils.js";

function main(){
    const numero = (input('Digite um numero: '))

    const resultado = analise(numero)

    print(resultado)
}
function analise(n){
    for(let item of n){
        if(item == "."){
            return 'Float'
        }
        else{
            return 'Inteiro'
        }
    }
}
main()