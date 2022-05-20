import { input,print } from "../io_utils.js";

function main(){
    const codigo_combustivel = input('Digite o codigo do combustivel desejavel (A ou G): ')
    const litros = Number(input('Digite a quantidade de litros desejados: '))

    const resultado = dinheiro_gasto(codigo_combustivel,litros)

    print(resultado)
}
main()

function dinheiro_gasto(c,l){
    const gasolina = (l * 2.50)
    const alcool = (l * 1.90)

    if(c === "G"){
        if(l<=20){
            return (gasolina - (gasolina * 4/100))
        }
        else if(l>20){
            return (gasolina - (gasolina * 6/100))
        }
    }

    if(c === "A"){
        if(l<=20){
            return (alcool - (alcool * 3/100))
        }
        else if(l>20){
            return (alcool - (alcool * 5/100))
        }
    }
}