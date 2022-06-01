import { input,print } from "../io_utils.js";

function main(){
    let LimiteInferior = Number(input('Digite um numero: '))
    let LimiteSuperior = Number(input('Digite um numero: '))

    while(LimiteInferior <= LimiteSuperior){
        if(LimiteInferior % 2 ===  0){
            print(LimiteInferior)
        }
    LimiteInferior++
    }
}
main()