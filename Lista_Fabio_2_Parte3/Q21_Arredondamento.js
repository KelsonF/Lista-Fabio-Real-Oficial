import { input,print } from "../io_utils.js";

function main(){
    const numero = input("Digite um numero do tipo float(ex:1.2;2.3): ").split(".")
    const parte_inteira = Number(numero[0])
    const parte_fracionada = Number(numero[1])

    const resultado = arredondar(numero,parte_inteira,parte_fracionada)

    print(`Numero: ${resultado}`)
}
function arredondar(completo,int,float){
    if(float>=5)return (int + 1)
    else if(float<5 && float !==0)return int
    else if(float === 0)return completo
}
main()