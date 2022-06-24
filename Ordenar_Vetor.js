

function main(){
    let vetor = [1,2,3,4,5]

    const vetor_ordenado = ordenar_vetor_bubble(vetor)

    console.log(vetor_ordenado)
}

function ordenar_vetor_bubble(vetor){
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


main()