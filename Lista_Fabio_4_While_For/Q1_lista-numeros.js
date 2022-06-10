import { input,print } from "../io_utils.js";

function main(){
    let numero = Number(input('Digite um numero: '))
    let divisores 

    while(numero !== 0){
        divisores = numero

        while(divisores > 0){
            if(numero % divisores === 0){
                print(divisores)
            }

            divisores--
        }

        numero = Number(input("Digite um numero: "))
    }
}
main()
