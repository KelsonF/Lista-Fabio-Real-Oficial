import { input,print } from "../../io_utils.js"

function main(){
    const coordenadas1 = input("Digite os valores das coordenadas x1 e y1: ").split(" ")
    const x1 = Number(coordenadas1[0])
    const y1 = Number(coordenadas1[1])

    const coordenadas2 = input("Digite os valores das coordenadas x2 e y2: ").split(" ")
    const x2 = Number(coordenadas2[0])
    const y2 = Number(coordenadas2[1])

    const resultado = area_retangulo(x1,x2,y1,y2)

    print(`A area do retangulo e: ${resultado}`)
}
function area_retangulo(x1,x2,y1,y2){
    const base = Math.abs(x1 - x2)
    const altura = Math.abs(y1 - y2)
    const area = base * altura
    return area
}
main()