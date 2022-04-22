import { input,print } from "../io_utils.js";

function main(){
    const numeros = input("Digite 5 numeros por espacamento(ex:1 2 3 4 5...): ").split(" ")
    const num1 = Number(numeros[0])
    const num2 = Number(numeros[1])
    const num3 = Number(numeros[2])
    const num4 = Number(numeros[3])
    const num5 = Number(numeros[4])
    const resultado = media_numeros(num1,num2,num3,num4,num5)

    print(resultado)
}
function media_numeros(n1,n2,n3,n4,n5){
    const media = (n1+n2+n3+n4+n5)/5
    let numeros_maiores = []
    if (n1>media)numeros_maiores.push(n1)
    else if (n2>media)numeros_maiores.push(n2)
    else if (n3>media)numeros_maiores.push(n3)
    else if (n4>media)numeros_maiores.push(n4)
    else if (n5>media)numeros_maiores.push(n5)
    return numeros_maiores
}
main()