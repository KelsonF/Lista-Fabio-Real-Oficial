import { input,print } from "../io_utils.js";

function main(){
    const salario = Number(input("Informe o valor do salario do funcionario: "))

    const resultado = reajuste(salario)

    print(salario)
    print(resultado)
}
function reajuste(s){
    const reajuste1 = s*(20/100) 
    const reajuste2 = s*(15/100) 
    const reajuste3 =  s*(10/100) 
    const reajuste4 = s*(5/100) 

    if(s<=280){
        return reajuste1 + s
    }
    else if(s>280 && s<=700){
        return reajuste2 + s
    }
    else if(s>700 && s<1500){
        return reajuste3 + s
    }
    else if(s>= 1500){
        return reajuste4 + s
    }
}
main()
