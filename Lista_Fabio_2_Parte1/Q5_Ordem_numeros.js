import { input, print } from "../../io_utils.js";

function main() {
    const numeros = input("digite 3 numeros separados por espacos: ").split(" ").map(Number)
    const lista_ordem = Ordenar(numeros[0], numeros[1], numeros[2])
    let menor = lista_ordem [0]
    let medio = lista_ordem [1]
    let maior = lista_ordem [2]

    console.log(`${menor}, ${medio}, ${maior}`)
}

function Ordenar(n1, n2, n3) {
    let menor, medio, maior
  
    if (n1 > n2 && n1 > n3) {
        maior = n1

        if (n2 > n3) {
            medio = n2
            menor = n3
        } else {
            medio = n3
            menor = n2
        }
    } else if (n1 < n2 && n1 < n3) {
        menor = n1
        
        if (n2 < n3) {
            medio = n2
            maior = n3
        } else {
            medio = n3
            maior = n2
        }
    } else {
        medio = n1
        if (n2 > n3) {
            maior = n2
            menor = n3
        } else {
            maior = n3
            menor = n2
        }
    }
return [menor, medio, maior]
}

main()