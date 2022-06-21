import { numero, fibonacci } from "../io_utils.js";

function main(){
    let valor = numero("Quantos numeros: ")
    let arrayFibonacci = fibonacci(valor)

    console.log(arrayFibonacci)

}

main()