import { input,print } from "../io_utils.js";

import { input,print } from "../io_utils.js";

function main(){
    let LimiteInferior = Number(input('Digite um numero: '))
    let LimiteSuperior = Number(input('Digite um numero: '))

    while(LimiteInferior <= LimiteSuperior){
        if(LimiteInferior < LimiteSuperior){
            print(LimiteInferior)
        }
    LimiteInferior++
    }
}
main()