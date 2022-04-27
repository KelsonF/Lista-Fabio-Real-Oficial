import { input,print } from "../io_utils.js";

function main(){
    const coeficientes = input("Digite o valor dos coeficientes A, B e C: ").split(" ")
    const A = Number(coeficientes[0])
    const B = Number(coeficientes[1])
    const C = Number(coeficientes[2])

    const resultado = calculo_raizes1(A,B,C)
    const resultado2 = calculo_raizes2(A,B,C)

    print(resultado.toFixed(0))
    print(resultado2.toFixed(0))
}
function calculo_raizes1(A,B,C){
    const delta = ((B*B) - (4*A*C))
    const baskara = (-B + Math.sqrt(delta))/2*A
    return baskara
}
function calculo_raizes2(A,B,C){
    const delta = ((B*B) - (4*A*C))
    const baskara = (-B - Math.sqrt(delta))/2*A
    return baskara
}
main()