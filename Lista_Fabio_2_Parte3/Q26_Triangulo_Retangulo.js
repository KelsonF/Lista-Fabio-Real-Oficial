import { input,print } from "../io_utils.js";

function main(){
    const lados_triangulo = input("Digite os lados do triangulo retangulo: ").split(" ")
    const lado1 = Number(lados_triangulo[0])
    const lado2 = Number(lados_triangulo[1])
    const lado3 = Number(lados_triangulo[2])

    const resultado = hipotenusa_triangulo(lado1,lado2,lado3)
    const resultado2 = catetos_triangulo(lado1,lado2,lado3)

    print(`Hipotenusa: ${resultado}`)
    print(`Catetos: ${resultado2}`)
}
function hipotenusa_triangulo(l1,l2,l3){
    let hipotesusa
    if(l1 > l2 && l1 > l3)hipotesusa = l1
    else if(l2 > l1 && l2 > l3)hipotesusa = l2
    else if(l3 > l1 && l3 > l2)hipotesusa = l3
    return hipotesusa
}
function catetos_triangulo(l1,l2,l3){
    let catetos
    if(l1 > l2 && l1 > l3)catetos = [l2,l3]
    else if(l2 > l1 && l2 > l3)catetos = [l1,l3]
    else if(l3 > l1 && l3 > l2)catetos = [l1,l2]
    return catetos
}
main()