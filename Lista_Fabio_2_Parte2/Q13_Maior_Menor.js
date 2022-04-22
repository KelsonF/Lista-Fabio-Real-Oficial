import { input,print } from "../io_utils.js";

function main(){
    const numeros = input("Digite 5 numeros com espaço entre eles (ex:1 2 3 4...): ").split(" ")
    const num1 = Number(numeros[0])
    const num2 = Number(numeros[1])
    const num3 = Number(numeros[2])
    const num4 = Number(numeros[3])
    const num5 = Number(numeros[4])    

    const maior_numero = maior(num1,num2,num3,num4,num5)
    const menor_numero = menor(num1,num2,num3,num4,num5)

    print(`O maior numero e:${maior_numero} `)
    print(`O menor numero e:${menor_numero}`)
}
function maior(n1,n2,n3,n4,n5){
    let maior = 0
    if(n1>n2 && n1>n3 && n1>n4 && n1>n5)maior = n1
    else if(n2>n1 && n2>n3 && n2>n4 && n2>n5)maior = n2    
    else if(n3>n2 && n3>n1 && n3>n4 && n3>n5)maior = n3  
    else if(n4>n2 && n4>n3 && n4>n1 && n4>n5)maior = n4
    else if(n5>n1 && n5>n2 && n5>n3 && n5>n4)maior = n5
    return maior
}
function menor(n1,n2,n3,n4,n5){
    let menor = 0
    if(n1<n2 && n1<n3 && n1<n4 && n1<n5)menor= n1
    else if(n2<n1 && n2<n3 && n2<n4 && n2<n5)menor = n2
    else if(n3<n2 && n3<n1 && n3<n4 && n3>n5)menor = n3
    else if(n4<n2 && n4<n3 && n4<n1 && n4<n5)menor = n4
    else if(n5<n1 && n5<n2 && n5<n3 && n5<n4)menor = n5
    return menor
}
main()