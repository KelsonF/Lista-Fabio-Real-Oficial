import { input,print } from "../io_utils.js";

function main(){
    let Ao = Number(input("Digite o valor inicial de uma PA: "))
    let limite = Number(input("Digite o limite de sua PA: "))
    const R = Number(input("Digite a razao de crescimento de sua PA: "))

    for(let i = Ao; Ao < limite; i++){
        print(`Valores: ${Ao}`)
        Ao += R
    }
}
main()