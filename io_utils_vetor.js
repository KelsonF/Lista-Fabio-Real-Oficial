export function vetor(tamanho_vetor){
    return new Array(tamanho_vetor)
}

export function preencher_vetor(vetor){
    for(let i = 0; i < vetor.length; i++){
        vetor[i] = Number(input("Valor: "))

    }

    return vetor
}

export function ordenar_vetor_bubble(vetor){
    let tamanho = vetor.length;
    let auxiliar;
    let k = 0;

    for (let i = 0; i < tamanho - 1; i++) {
        for (let j = 0; j < tamanho - 1 - k; j++) {
            if(vetor[j] > vetor[j + 1]){
                auxiliar = vetor[j]
                vetor[j] = vetor[j + 1]
                vetor[j + 1] = auxiliar
            }
            
        }
    
        k++
    }

    return vetor
}

export function inverter_vetor(vetor){
    const vetor_invertido = novo_vetor(vetor.length)

    let num = vetor.length-1 
    
    for(let i = 0; i < vetor.length; i++){
        vetor_invertido[i] = vetor[num]
        num--
    }

    return vetor_invertido
}

export function media_elementos_vetor(vetor){
    let soma = 0

    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }

    const mediaElementos = soma / vetor.length

    return mediaElementos
}

export function push_vetor(vetor,elemento){
    let novo_vetor = novo_vetor(vetor.length+1)

    novo_vetor = vetor
    novo_vetor[novo_vetor.length-1] = elemento
    
    return novo_vetor
}

export function mediana_vetor(vetor){
    let meio 
    let mediana

    if(vetor.length % 2 === 0){
        meio = vetor.length/2
        mediana = (vetor[meio] + vetor[meio-1])/2
    }else{
        meio = (vetor.length-1)/2 + 1
        mediana = vetor[meio]
    }

    return mediana
}
