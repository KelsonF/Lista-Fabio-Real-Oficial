import { input,print } from "../io_utils.js";

function main(){
    const peso = Number(input("Digite seu peso: "))
    const altura = Number(input("Digite sus altura: "))
    const resultado = IMC(peso,altura)

    print(`Status: ${resultado}`)
}
function IMC(p,h){
    const imc = (p/h**2)
    if(imc<25){
        return "Peso Normal"
    }
    else if(imc>=25 && imc<=30){
        return "Obesidade"
    }
    else if(imc>30){
        return "Obesidade Morbida"
    }
}
main()