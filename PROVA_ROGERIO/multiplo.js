import { input,print } from "../io_utils.js";

function main(){
    var lista = []
    var num1 = input("Digite um numero")
    var num2 = input("Digite um numero")
    
    while(maior(num1,num2) % menor(num1,num2) != 0){
        num1 = num2
        num2 = Number(input("Digite um numero"))
        lista.push(num2)
    }

    let pares = 0
    let impars = 0 
    let positivos = 0
    let negativos = 0
}
function maior(n1,n2){
    return Math.max(n1,n2)
}
function menor(n1,n2){
   return Math.min(n1,n2)
}
function ehpar(n2){
    
}
main()