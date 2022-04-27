import { input,print } from "../io_utils.js";

function main(){
    const angulo_usuario = Number(input("Digite o valor de um angulo(entre 0 e 360): "))
    const resultado = quadrante(angulo_usuario)

    print(`Localidade: ${resultado}`)
}
function quadrante(a){
    if(a>=0 && a<=90)return "Primeiro Quadrante"
    else if(a>90 && a<=180)return "Segundo Quadrante"
    else if(a>180 && a<=270)return "Terceiro Quadrante"
    else if(a>270 && a<=360)return "Quarto Quadrante"
}
main()